from django.urls import path
from Owner import views

urlpatterns = [
    path('dashboard/',views.dasboard_page,name="dashboard"),
    path('demo/',views.demo_page,name="demo"),
    path('watch/',views.watch_page,name="watch_page"),
    path('order/',views.order_page,name="order_page"),
    path('buyer/',views.buyers_page,name="buyer_page")
]