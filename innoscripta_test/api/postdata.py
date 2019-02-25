import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pickle
from data import models


class PostData(APIView):
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
                'company' : line.company,
                'amount' : line.amount
            })
    return Response(data)
