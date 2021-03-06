"""innoscripta_test URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from innoscripta_test.views import index_view
from innoscripta_test.api.getbills import GetBill
from innoscripta_test.api.postdata import PostDataBills , PostDataCompanies

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/get/getbill', GetBill),
    path('api/get/postdatacompanies', PostDataCompanies.as_view()),
    path('api/get/postdatabills', PostDataBills.as_view()),
    re_path('',index_view, name='index_view'),
]
