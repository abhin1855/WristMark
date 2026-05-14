from django.urls import path
from Owner import views

urlpatterns = [
    path('dashboard/',views.dasboard_page,name="dashboard"),
    path('demo/',views.demo_page,name="demo"),
    path('watch/',views.watch_page,name="watch_page")
]