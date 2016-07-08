# -*- coding: utf-8 -*-
import tornado.ioloop
import tornado.web

from serverdbsqlite import ServerDBSQLite
server_db = ServerDBSQLite()


class BaseHandler(tornado.web.RequestHandler):

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Methods", "GET,POST,DELETE")

    def options(self):
        self.set_header("Access-Control-Allow-Headers", "Content-Type")


class ReloadHandler(BaseHandler):

    def get(self):
        server_db.import_csv_areas("areas.csv")
        server_db.import_csv_categories("categories.csv")
        server_db.import_csv_items("items.csv")
        self.write("OK")


class AreasHandler(BaseHandler):

    def get(self):
        res = {"areas": []}
        areas = server_db.get_areas()
        for area in areas:
            res["areas"].append({
                "id": area.AreaId, "nr": area.AreaNr, "desc": area.AreaDesc, "x": area.AreaX, "y": area.AreaY,
                "z": area.AreaZ, "width": area.AreaWidth, "height": area.AreaHeight
            })
        self.write(res)

    def post(self):
        #nr = self.get_argument("nr")
        #desc = self.get_argument("desc")
        #x = self.get_argument("x", 0)
        #y = self.get_argument("y", 0)
        #z = self.get_argument("z", 0)
        #width = self.get_argument("width", 0)
        #height = self.get_argument("height", 0)
        #c.execute("INSERT INTO areas VALUES (?, ?, ?, ?, ?, ?, ?)", (nr, desc, x, y, z, width, height))
        #self.write("OK")
        pass

    def delete(self):
        #nr = self.get_argument("nr")
        #c.execute("DELETE FROM areas WHERE nr = ?", (nr,))
        #self.write("OK")
        pass


class CategoriesHandler(BaseHandler):

    def get(self):
        res = {"categories": []}
        categories = server_db.get_categories()
        for category in categories:
            res["categories"].append({
                "id": category.CategoryId, "nr": category.CategoryNr, "desc": category.CategoryDesc,
                "icon": category.CategoryIcon
            })
        self.write(res)


class ItemsHandler(BaseHandler):

    def get(self):
        res = {"items": []}
        items = server_db.get_items()
        for item in items:
            res["items"].append({
                "id": item.ItemId, "nr": item.ItemNr, "desc": item.ItemDesc, "price": item.ItemPrice,
                "category_nr": item.CategoryNr
            })
        self.write(res)


class OrdersHandler(BaseHandler):

    def get(self):
        res = {"orders": []}
        orders = server_db.get_orders()
        for order in orders:
            res["orders"].append({
                "id": order.OrderId, "area_nr": order.AreaNr, "item_nr": order.ItemNr, "state": order.OrderState
            })
        self.write(res)


application = tornado.web.Application([
    (r"/reload", ReloadHandler),
    (r"/areas", AreasHandler),
    (r"/categories", CategoriesHandler),
    (r"/items", ItemsHandler),
    (r"/orders", OrdersHandler),
])


if __name__ == "__main__":
    server_db.init_database()

    print("Importing CSV files...")
    server_db.import_csv_areas("areas.csv")
    server_db.import_csv_categories("categories.csv")
    server_db.import_csv_items("items.csv")
    print("Starting service on port 8888...")
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()