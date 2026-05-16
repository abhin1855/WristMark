from django.urls import path
from Owner import views

urlpatterns = [
    path('demo/',views.demo_page,name="demo"),
    path('dashboard/',views.dasboard_page,name="dashboard"),


    path('watch/',views.watch_page,name="watch_page"),
    path('addwatch/',views.add_watch,name="add_watch"),

    path('order/',views.order_page,name="order_page"),
    path('buyer/',views.buyers_page,name="buyer_page"),
    path('profile/',views.profile_page,name="profile_page"),

    path('category/',views.category_page,name="category_page"),
    path('add_category/',views.add_category,name="add_category"),

    path('promotion/',views.promotion_page,name="promotion_page"),
    path('return/',views.returns_page,name="return_page"),
    path('review/',views.review_page,name="review_page"),
]