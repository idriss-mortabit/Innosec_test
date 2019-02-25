from rest_framework.decorators import api_view
from data.models import t_firmen, t_rechnungstermine
from time import gmtime, strftime
from random import randint
from rest_framework.response import Response
# b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
# b.save()
@api_view(['POST'])
def GetBill(request):
    My_t_rechnungstermine = t_rechnungstermine(
      id
      company
      date
      purpose
      reminder
      amount
      billNumber
      fraction
      done
      status
      billHtml
      dueDate
      Komment
      halfbills
      printeddate
      signeddate
      Unsicher
      ignored
      aktenziech
      billtext
      payday
      csvfilename
    )
    My_t_rechnungstermine.save()
  return Response(data)