from django.shortcuts import render

# Create your views here.
def dasboard_page(request):
    return render(request,"Dashboard.html")

def demo_page(request):
    return render(request,"demo_page.html")

def watch_page(request):
    return render(request,"Watch.html")

def order_page(request):
    return render(request,"Orders.html")

def buyers_page(request):
    return render(request,"Buyers.html")

def profile_page(request):
    return render(request,"Profile.html")

def add_watch(request):
    return render(request,"Add_Watch.html")