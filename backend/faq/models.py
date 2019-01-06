from django.db import models

# Create your models here.
class Faq(models.Model):
    question = models.CharField(unique=True, max_length=250, null=False, blank=False)
    answer = models.CharField(unique=True, max_length=250, null=False, blank=False)
    
    def __str__(self):
        return self.question
