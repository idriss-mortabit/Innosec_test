from django.contrib import admin
from data.models import t_rechnungstermine, t_firmen

class t_firmenAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'project_ID',
        'name',
        'fundingCode',
        'referenceNr',
        'city',
        'country',
        'billsGenerated',
    )
    search_fields = ('id','name','country')
    list_filter = (
        'city',
        'country',
    )

class t_rechnungstermineAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'company',
        'date',
        'purpose',
        'billNumber',
        'halfbills',
    )
    search_fields = ('id','company','purpose')
    list_filter = (
        'company',
        'date',
    )

admin.site.register(t_firmen, t_firmenAdmin)
admin.site.register(t_rechnungstermine, t_rechnungstermineAdmin)
# Register your models here.
