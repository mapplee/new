from django.shortcuts import render
import time
# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def times(request):
    se=10
    return render(request,'time.html',{'se':se})
    
   