from django.shortcuts import render

# Create your views here.
def dasboard_page(request):
    return render(request,"Dashboard.html")

def demo_page(request):
    return render(request,"demo_page.html")