from django.shortcuts import render

# Create your views here.
def dasboard_page(request):
    return render(request,"Dashboard.html")

def demo_page(request):
    return render(request,"demo_page.html")

def watch_page(request):
    return render(request,"Watch.html")

def add_watch(request):
    return render(request,"Add_Watch.html")

def order_page(request):
    return render(request,"Orders.html")

def buyers_page(request):
    return render(request,"Buyers.html")

def profile_page(request):
    return render(request,"Profile.html")

def category_page(request):
    return render(request,"Category.html")

def category_view_all(request):
    return render(request,"Category_ViewAll.html")

def add_category(request):
    return render(request,"Add_Category.html")

def promotion_page(request):
    return render(request,"Promotion.html")

def review_page(request):
    return render(request,"Review.html")

def returns_page(request):
    return render(request,"Return.html")

def settings_page(request):
    return render(request,"Settings.html")


