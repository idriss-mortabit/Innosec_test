# Generated by Django 2.1.7 on 2019-02-26 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0002_auto_20190224_1934'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='t_firmen',
            options={'verbose_name': 't_firmen', 'verbose_name_plural': 't_firmens'},
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='Antrag',
            field=models.CharField(default=None, max_length=50, verbose_name='Antrag'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='Bewilligungsbescheid',
            field=models.CharField(default=None, max_length=50, verbose_name='Bewilligungsbescheid'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='Department',
            field=models.CharField(default=None, max_length=1000, verbose_name='Department'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='Fakultat',
            field=models.CharField(default=None, max_length=100, verbose_name='Fakultat'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='Fax',
            field=models.CharField(default=None, max_length=50, verbose_name='Fax'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='FuEsum',
            field=models.FloatField(default=None, max_length=110, verbose_name='FuEsum'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='Mail',
            field=models.CharField(default=None, max_length=50, verbose_name='Mail'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='Telefon',
            field=models.CharField(default=None, max_length=50, verbose_name='Telefon'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='Zustandiger',
            field=models.CharField(default=None, max_length=50, verbose_name='Zustandiger'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='amountcomp',
            field=models.CharField(default=None, max_length=50, verbose_name='amountcomp'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='amountpar',
            field=models.CharField(default=None, max_length=50, verbose_name='amountpar'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='annualSales',
            field=models.FloatField(default=None, max_length=11, verbose_name='annualSales'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='belingsum',
            field=models.FloatField(default=None, max_length=110, verbose_name='belingsum'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='city',
            field=models.CharField(default='', max_length=50, verbose_name='city'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='code',
            field=models.CharField(default='', max_length=50, verbose_name='code'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='comment',
            field=models.CharField(default=None, max_length=1999, verbose_name='comment'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactEmail',
            field=models.CharField(default=None, max_length=255, verbose_name='contactEmail'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactEmail2',
            field=models.CharField(default=None, max_length=50, verbose_name='contactEmail2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactGender',
            field=models.CharField(default=None, max_length=50, verbose_name='contactGender'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactGender2',
            field=models.CharField(default=None, max_length=50, verbose_name='contactGender2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactName',
            field=models.CharField(default=None, max_length=255, verbose_name='contactName'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactName2',
            field=models.CharField(default=None, max_length=50, verbose_name='contactName2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactPrename',
            field=models.CharField(default=None, max_length=255, verbose_name='contactPrename'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactPrename2',
            field=models.CharField(default=None, max_length=50, verbose_name='contactPrename2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactgender3',
            field=models.CharField(default=None, max_length=50, verbose_name='contactgender3'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactgender4',
            field=models.CharField(default=None, max_length=50, verbose_name='contactgender4'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contacthours3',
            field=models.CharField(default=None, max_length=250, verbose_name='contacthours3'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contacthours4',
            field=models.CharField(default=None, max_length=255, verbose_name='contacthours4'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactmail3',
            field=models.CharField(default=None, max_length=250, verbose_name='contactmail3'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactmail4',
            field=models.CharField(default=None, max_length=255, verbose_name='contactmail4'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactname3',
            field=models.CharField(default=None, max_length=250, verbose_name='contactname3'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactname4',
            field=models.CharField(default=None, max_length=255, verbose_name='contactname4'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactphone3',
            field=models.CharField(default=None, max_length=250, verbose_name='contactphone3'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactphone4',
            field=models.CharField(default=None, max_length=250, verbose_name='contactphone4'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactprename3',
            field=models.CharField(default=None, max_length=250, verbose_name='contactprename3'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='contactprename4',
            field=models.CharField(default=None, max_length=255, verbose_name='contactprename4'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='country',
            field=models.CharField(default=None, max_length=50, verbose_name='country'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='date1',
            field=models.CharField(default=None, max_length=20, verbose_name='date1'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='date2',
            field=models.CharField(default=None, max_length=20, verbose_name='date2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='fee',
            field=models.FloatField(default=None, max_length=110, verbose_name='fee'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='fee2',
            field=models.CharField(default=None, max_length=50, verbose_name='fee2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='funding',
            field=models.FloatField(default=None, max_length=11, verbose_name='funding'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='fundingCode',
            field=models.CharField(default=None, max_length=255, verbose_name='fundingCode'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='fundingRate',
            field=models.FloatField(default=None, max_length=11, verbose_name='fundingRate'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='jae',
            field=models.FloatField(default=None, max_length=11, verbose_name='jae'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='markupFactor',
            field=models.FloatField(default=None, max_length=11, verbose_name='markupFactor'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='maxSalary',
            field=models.FloatField(default=None, max_length=11, verbose_name='maxSalary'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='maxhours',
            field=models.CharField(default=None, max_length=50, verbose_name='maxhours'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='maxhours2',
            field=models.CharField(default=None, max_length=50, verbose_name='maxhours2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='name',
            field=models.CharField(default=None, max_length=255, verbose_name='name'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='partner',
            field=models.CharField(default=None, max_length=250, verbose_name='partner'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='phone1',
            field=models.CharField(default=None, max_length=50, verbose_name='phone1'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='phone2',
            field=models.CharField(default=None, max_length=50, verbose_name='phone2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='referenceNr',
            field=models.CharField(default=None, max_length=255, verbose_name='referenceNr'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='salesTax',
            field=models.FloatField(default=None, max_length=11, verbose_name='salesTax'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='state',
            field=models.CharField(default=None, max_length=50, verbose_name='state'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='street',
            field=models.CharField(default='', max_length=255, verbose_name='street'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='street2',
            field=models.CharField(default=None, max_length=50, verbose_name='street2'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='stundensatz',
            field=models.FloatField(default=None, max_length=110, verbose_name='stundensatz'),
        ),
        migrations.AlterField(
            model_name='t_firmen',
            name='type',
            field=models.CharField(default=None, max_length=10000, verbose_name='type'),
        ),
    ]