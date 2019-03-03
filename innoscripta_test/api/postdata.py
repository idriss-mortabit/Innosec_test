import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pickle
from data import models


class PostDataBills(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):
    table = models.t_rechnungstermine.objects.all()
    data=[]
    for line in table :
        data.append({
              'id' : line.id,
              'date' : line.date,
              'company' : line.company.name,
              'amount' : line.amount,
              'reminder' : line.reminder,
              'purpose' : line.purpose,
              'billNumber' : line.billNumber,
              'fraction' : line.fraction,
              'done' : line.done,
              'status' : line.status,
              'billHtml' : line.billHtml,
              'dueDate' : line.dueDate,
              'Komment' : line.Komment,
              'halfbills' : line.halfbills,
              'printeddate' : line.printeddate,
              'signeddate' : line.signeddate,
              'Unsicher' : line.Unsicher,
              'ignored' : line.ignored,
              'aktenziech' : line.aktenziech,
              'billtext' : line.billtext,
              'payday' : line.payday,
              'csvfilename' : line.csvfilename
            })
    return Response(data)


class PostDataCompanies(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):
    table = models.t_firmen.objects.all()
    data=[]
    for line in table :
        data.append({
                'company' : line.name
            })
    return Response(data)
