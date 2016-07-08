# -*- coding: utf-8 -*-
from serverdb import *
import csv
import sqlite3


class ServerDBSQLite(ServerDB):

    def __init__(self):
        # conn = sqlite3.connect(":memory:")
        self.conn = sqlite3.connect("ordermanager.db")
        self.cursor = self.conn.cursor()

    def get_areas(self):
        areas = []
        for row in self.cursor.execute("SELECT rowid, nr, desc, x, y, z, width, height FROM areas ORDER BY rowid"):
            area_id = row[0]
            area_nr = row[1]
            area_desc = row[2]
            area_x = row[3]
            area_y = row[4]
            area_z = row[5]
            area_width = row[6]
            area_height = row[7]

            area = Area(area_id, area_nr, area_desc, area_x, area_y, area_z, area_width, area_height)
            areas.append(area)
        return areas

    def get_categories(self):
        categories = []
        for row in self.cursor.execute("SELECT rowid, nr, desc, icon FROM categories ORDER BY rowid"):
            category_id = row[0]
            category_nr = row[1]
            category_desc = row[2]
            category_icon = row[3]

            category = Category(category_id, category_nr, category_desc, category_icon)
            categories.append(category)
        return categories

    def get_items(self):
        items = []
        for row in self.cursor.execute("SELECT rowid, nr, desc, price, category_nr FROM items ORDER BY rowid"):
            item_id = row[0]
            item_nr = row[1]
            item_desc = row[2]
            item_price = row[3]
            category_nr = row[4]

            item = Item(item_id, item_nr, item_desc, item_price, category_nr)
            items.append(item)
        return items

    def get_orders(self):
        orders = []
        for row in self.cursor.execute(
                "SELECT rowid, area_nr, item_nr, state FROM orders WHERE state < 3 ORDER BY rowid"):
            order_id = row[0]
            area_nr = row[1]
            item_nr = row[2]
            order_state = row[3]

            order = Order(order_id, area_nr, item_nr, order_state)
            orders.append(order)
        return orders

    def init_database(self):
        print("Initializing sqlite database...")
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS areas (
                nr INTEGER UNIQUE NOT NULL,
                desc TEXT UNIQUE NOT NULL,
                x INTEGER,
                y INTEGER,
                z INTEGER,
                width INTEGER,
                height INTEGER
            )
        """)
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS reservations (
                nr INTEGER UNIQUE NOT NULL,
                desc TEXT UNIQUE NOT NULL,
                start REAL,
                end REAL,
                area INTEGER
            )
        """)
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS categories (
                nr INTEGER UNIQUE NOT NULL,
                desc TEXT UNIQUE NOT NULL,
                icon TEXT
            )
        """)
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS items (
                nr INTEGER NOT NULL,
                desc TEXT UNIQUE NOT NULL,
                price REAL,
                category_nr INTEGER NOT NULL
            )
        """)
        # STATE: 0: NEW, 1: PREPARED, 2: TRANSPORTED, 3: BILLED
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS orders (
                area_nr INTEGER NOT NULL,
                item_nr INTEGER NOT NULL,
                state INTEGER NOT NULL,
                ts NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
        """)
        print("SQLite database successfully initialized!")

    def import_csv_areas(self, file_name):
        self.cursor.execute(u"DELETE FROM areas")
        with open(file_name, 'r') as csvfile:
            filereader = csv.reader(csvfile, delimiter=",", quotechar="|")
            for row in filereader:
                self.cursor.execute(
                    u"INSERT INTO areas VALUES (?, ?, ?, ?, ?, ?, ?)",
                    (row[0], row[1].decode('utf8'), row[2], row[3], row[4], row[5], row[6]))

    def import_csv_categories(self, file_name):
        self.cursor.execute(u"DELETE FROM categories")
        with open(file_name, 'r') as csvfile:
            filereader = csv.reader(csvfile, delimiter=",", quotechar="|")
            for row in filereader:
                self.cursor.execute(u"INSERT INTO categories VALUES (?, ?, ?)", (row[0], row[1].decode('utf8'),
                                                                                 row[2].decode('utf8')))

    def import_csv_items(self, file_name):
        self.cursor.execute(u"DELETE FROM items")
        with open(file_name, 'r') as csvfile:
            filereader = csv.reader(csvfile, delimiter=",", quotechar="|")
            for row in filereader:
                self.cursor.execute(u"INSERT INTO items VALUES (?, ?, ?, ?)", (row[0], row[1].decode('utf8'), row[2],
                                                                               row[3]))
