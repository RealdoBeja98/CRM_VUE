# Generated by Django 4.1.3 on 2022-12-09 22:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lead', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lead',
            old_name='contact',
            new_name='contact_person',
        ),
        migrations.AddField(
            model_name='lead',
            name='website',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
