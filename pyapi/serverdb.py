# -*- coding: utf-8 -*-


class Area(object):

    def __init__(self, area_id, area_nr, area_desc, area_x, area_y, area_z, area_width, area_height):
        self.__area_id = area_id
        self.__area_nr = area_nr
        self.__area_desc = area_desc
        self.__area_x = area_x
        self.__area_y = area_y
        self.__area_z = area_z
        self.__area_width = area_width
        self.__area_height = area_height

    def __get_area_id(self):
        return self.__area_id

    def __get_area_nr(self):
        return self.__area_nr

    def __get_area_desc(self):
        return self.__area_desc

    def __get_area_x(self):
        return self.__area_x

    def __get_area_y(self):
        return self.__area_y

    def __get_area_z(self):
        return self.__area_z

    def __get_area_width(self):
        return self.__area_width

    def __get_area_height(self):
        return self.__area_height

    AreaId = property(__get_area_id)
    AreaNr = property(__get_area_nr)
    AreaDesc = property(__get_area_desc)
    AreaX = property(__get_area_x)
    AreaY = property(__get_area_y)
    AreaZ = property(__get_area_z)
    AreaWidth = property(__get_area_width)
    AreaHeight = property(__get_area_height)


class Category(object):

    def __init__(self, category_id, category_nr, category_desc, category_icon):
        self.__category_id = category_id
        self.__category_nr = category_nr
        self.__category_desc = category_desc
        self.__category_icon = category_icon

    def __get_category_id(self):
        return self.__category_id

    def __get_category_nr(self):
        return self.__category_nr

    def __get_category_desc(self):
        return self.__category_desc

    def __get_category_icon(self):
        return self.__category_icon

    CategoryId = property(__get_category_id)
    CategoryNr = property(__get_category_nr)
    CategoryDesc = property(__get_category_desc)
    CategoryIcon = property(__get_category_icon)


class Item(object):

    def __init__(self, item_id, item_nr, item_desc, item_price, category_nr):
        self.__item_id = item_id
        self.__item_nr = item_nr
        self.__item_desc = item_desc
        self.__item_price = item_price
        self.__category_nr = category_nr

    def __get_item_id(self):
        return self.__item_id

    def __get_item_nr(self):
        return self.__item_nr

    def __get_item_desc(self):
        return self.__item_desc

    def __get_item_price(self):
        return self.__item_price

    def __get_category_nr(self):
        return self.__category_nr

    ItemId = property(__get_item_id)
    ItemNr = property(__get_item_nr)
    ItemDesc = property(__get_item_desc)
    ItemPrice = property(__get_item_price)
    CategoryNr = property(__get_category_nr)


class Order(object):

    def __init__(self, order_id, area_nr, item_nr, order_state):
        self.__order_id = order_id
        self.__area_nr = area_nr
        self.__item_nr = item_nr
        self.__order_state = order_state

    def __get_order_id(self):
        return self.__order_id

    def __get_area_nr(self):
        return self.__area_nr

    def __get_item_nr(self):
        return self.__item_nr

    def __get_order_state(self):
        return self.__order_state

    OrderId = property(__get_order_id)
    AreaNr = property(__get_area_nr)
    ItemNr = property(__get_item_nr)
    OrderState = property(__get_order_state)


class ServerDB(object):

    def get_areas(self):
        pass

    def get_categories(self):
        pass

    def get_items(self):
        pass

    def init_database(self):
        pass

    def import_csv_areas(self, file_name):
        pass

    def import_csv_categories(self, file_name):
        pass

    def import_csv_items(self, file_name):
        pass
