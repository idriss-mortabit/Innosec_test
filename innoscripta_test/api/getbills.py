from rest_framework.decorators import api_view
from data.models import t_firmen, t_rechnungstermine
from time import gmtime, strftime
from random import randint
from rest_framework.response import Response
import sys

@api_view(['POST'])
def GetBill(request):
    data = request.data
    if (data["action"]=='add') :
      mycompany = t_firmen.objects.get(name= data["company"])
      My_t_rechnungstermine = t_rechnungstermine(
        id = data["id"],
        company = mycompany,
        date = data["date"],
        purpose = data["purpose"],
        reminder = data["reminder"],
        amount = data["amount"],
        billNumber = data["billNumber"],
        fraction = data["fraction"],
        done = data["done"],
        status = data["status"],
        billHtml = data["billHtml"],
        dueDate = data["dueDate"],
        Komment = data["Komment"],
        halfbills = data["halfbills"],
        printeddate = data["printeddate"],
        signeddate = data["signeddate"],
        Unsicher = data["Unsicher"],
        ignored = data["ignored"],
        aktenziech = data["aktenziech"],
        billtext = data["billtext"],
        payday = data["payday"],
        csvfilename = data["csvfilename"]
      )
      My_t_rechnungstermine.save()
    else:
      mybill= t_rechnungstermine.objects.get(id= data["lid"])
      mycompany = t_firmen.objects.get(name= data["company"])
      mybill.id = data["id"]
      mybill.company = mycompany
      mybill.date = data["date"]
      mybill.purpose = data["purpose"]
      mybill.reminder = data["reminder"]
      mybill.amount = data["amount"]
      mybill.billNumber = data["billNumber"]
      mybill.fraction = data["fraction"]
      mybill.done = data["done"]
      mybill.status = data["status"]
      mybill.billHtml = data["billHtml"]
      mybill.dueDate = data["dueDate"]
      mybill.Komment = data["Komment"]
      mybill.halfbills = data["halfbills"]
      mybill.printeddate = data["printeddate"]
      mybill.signeddate = data["signeddate"]
      mybill.Unsicher = data["Unsicher"]
      mybill.ignored = data["ignored"]
      mybill.aktenziech = data["aktenziech"]
      mybill.billtext = data["billtext"]
      mybill.payday = data["payday"]
      mybill.csvfilename = data["csvfilename"]
      mybill.save()
    return Response(data)