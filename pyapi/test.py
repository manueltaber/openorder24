# -*- coding: utf-8 -*-
import httplib
import ast
import time


if __name__ == "__main__":
    print("Starting tests...")
    conn = httplib.HTTPConnection('127.0.0.1', 8888)
    i = 0
    while 1 == 1:
        if (i % 100) == 0:
            print "Testrun %s" % i
            conn = httplib.HTTPConnection('127.0.0.1', 8888)
        for url in ["areas", "categories", "items", "orders"]:
            # print u"Testing URL %s" % url
            conn.request("GET", "/%s" % url)
            res = conn.getresponse()
            if res.status != 200:
                raise Exception(u"Fail!!! URL: %s, Status: %s, Reason: %s" % (url, res.status, res.reason))
            data = res.read()
            if len(data) == 0:
                raise Exception(u"Fail!!! Empty response! URL: %s" % url)
            json_data = ast.literal_eval(data)
            if url not in json_data:
                raise Exception(u"Fail!!! Invalid response! URL: %s, Response: %s" % (url, data))
            # print u"OK!"
            # time.sleep(0.0001)

        for url in ["asdf", "12sddd", "areas1", "1areas"]:
            # print u"Testing URL %s" % url
            conn.request("GET", "/%s" % url)
            res = conn.getresponse()
            if res.status != 404:
                raise Exception(u"Fail!!! URL: %s, Status: %s, Reason: %s" % (url, res.status, res.reason))
            data = res.read()
            if len(data) == 0:
                raise Exception(u"Fail!!! Empty response! URL: %s" % url)
            # print u"OK!"
            # time.sleep(0.0001)
        i += 1
        time.sleep(0.0001)

    print("Tests done!")