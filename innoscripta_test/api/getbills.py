from rest_framework.decorators import api_view
from data.models import t_firmen, t_rechnungstermine
from time import gmtime, strftime
from random import randint
from rest_framework.response import Response

@api_view(['POST'])
def GetBill(request):
    data = request.data
    My_t_rechnungstermine = t_rechnungstermine(
      id = data["id"],
      company = data["company"],
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
      csvfilename = data["csvfilename"],
    )
    My_t_rechnungstermine.save()
    return Response(data)