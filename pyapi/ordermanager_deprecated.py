import csv
import tornado.ioloop
import tornado.web
import sqlite3

# conn = sqlite3.connect(":memory:")
conn = sqlite3.connect("ordermanager.db")
c = conn.cursor()


class BaseHandler(tornado.web.RequestHandler):

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Methods", "GET,POST,DELETE")
        
    def options(self):
        self.set_header("Access-Control-Allow-Headers", "Content-Type")


class ReloadHandler(BaseHandler):

    def get(self):
        import_csv_areas("areas.csv", c)
        import_csv_categories("categories.csv", c)
        import_csv_items("items.csv", c)
        self.write("OK")


class AreasHandler(BaseHandler):

    def get(self):
        areas = {"areas": []}
        for row in c.execute("SELECT nr, desc, x, y, z, width, height FROM areas ORDER BY rowid"):
            areas["areas"].append({
              "nr": row[0], "desc": row[1], "x": row[2], "y": row[3], "z": row[4], 
              "width": row[5], "height": row[6]
            })
        self.write(areas)

    def post(self):
        nr = self.get_argument("nr")
        desc = self.get_argument("desc")
        x = self.get_argument("x", 0)
        y = self.get_argument("y", 0)
        z = self.get_argument("z", 0)
        width = self.get_argument("width", 0)
        height = self.get_argument("height", 0)
        c.execute("INSERT INTO areas VALUES (?, ?, ?, ?, ?, ?, ?)", (nr, desc, x, y, z, width, height))
        self.write("OK")

    def delete(self):
        nr = self.get_argument("nr")
        c.execute("DELETE FROM areas WHERE nr = ?", (nr,))
        self.write("OK")


class CategoriesHandler(BaseHandler):

    def get(self):
        print(u"categories request...")
        categories = {"categories": []}
        for row in c.execute("SELECT * FROM categories ORDER BY rowid"):
            categories["categories"].append({"id": row[0], "desc": row[1]})
        print(u"response: %s" % categories)
        self.write(categories)


class ItemsHandler(BaseHandler):

    def get(self):
        print(u"items request...")
        items = {"items": []}
        for row in c.execute("SELECT * FROM items ORDER BY rowid"):
            items["items"].append({"id": row[0], "desc": row[1]})
        print(u"response: %s" % items)
        self.write(items)


class OrdersHandler(BaseHandler):

    def get(self):
        print(u"orders request...")
        orders = {"orders": []}
        for row in c.execute("SELECT * FROM orders ORDER BY rowid"):
            orders["orders"].append({"id": row[0], "desc": row[1]})
        print(u"response: %s" % orders)
        self.write(orders)


application = tornado.web.Application([
    (r"/reload", ReloadHandler),
    (r"/areas", AreasHandler),
    (r"/categories", CategoriesHandler),
    (r"/items", ItemsHandler),
    (r"/orders", OrdersHandler),
])


def init_database():
    print("Initializing database...")
    c.execute("""
        CREATE TABLE IF NOT EXISTS areas (
            nr INTEGER UNIQUE NOT NULL, 
            desc TEXT NOT NULL,
            x INTEGER,
            y INTEGER,
            z INTEGER,
            width INTEGER,
            height INTEGER
        )
    """)
    c.execute("""
        CREATE TABLE IF NOT EXISTS reservations (
            nr INTEGER UNIQUE NOT NULL, 
            desc TEXT NOT NULL,
            start REAL,
            end REAL,
            area INTEGER
        )
    """)
    c.execute("""
        CREATE TABLE IF NOT EXISTS categories (
            nr INTEGER NOT NULL, 
            desc TEXT NOT NULL
        )
    """)
    c.execute("""
        CREATE TABLE IF NOT EXISTS items (
            nr INTEGER NOT NULL, 
            desc TEXT NOT NULL
        )
    """)
    c.execute("""
        CREATE TABLE IF NOT EXISTS orders (
            areaid INTEGER NOT NULL, 
            itemid INTEGER NOT NULL,
            ts NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    """)


def import_csv_areas(file_name, cursor):
    cursor.execute("DELETE FROM areas")
    with open(file_name, 'r') as csvfile:
        filereader = csv.reader(csvfile, delimiter=",", quotechar="|")
        for row in filereader:
            cursor.execute("INSERT INTO areas VALUES (?, ?, ?, ?, ?, ?, ?)", (row[0], row[1], row[2], row[3], row[4], row[5], row[6]))


def import_csv_categories(file_name, cursor):
    cursor.execute("DELETE FROM categories")
    with open(file_name, 'r') as csvfile:
        filereader = csv.reader(csvfile, delimiter=",", quotechar="|")
        for row in filereader:
            cursor.execute("INSERT INTO categories VALUES (?, ?)", (row[0], row[1]))


def import_csv_items(file_name, cursor):
    cursor.execute("DELETE FROM items")
    with open(file_name, 'r') as csvfile:
        filereader = csv.reader(csvfile, delimiter=",", quotechar="|")
        for row in filereader:
            cursor.execute("INSERT INTO items VALUES (?, ?)", (row[0], row[1]))


if __name__ == "__main__":
    init_database()
    print("Importing CSV files...")
    import_csv_areas("areas.csv", c)
    import_csv_categories("categories.csv", c)
    import_csv_items("items.csv", c)
    print("Starting service on port 8888...")
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()