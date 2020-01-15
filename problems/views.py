from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def problems(request):
    return render(request,'problems.html')