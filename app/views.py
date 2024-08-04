from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.contrib import messages

def index(request):
    return render(request, "app/index.html")
def projects(request):
    return render(request, "app/projects.html")

def about_me(request):
    return render(request, "app/about_me.html")

def contact_me(request):
    if request.method == "POST":
        message = request.POST.get("message")
        email = request.POST.get("email")
        name = request.POST.get("name")

        if not message:
            messages.error(request, "Message is compulsory")
        if not email:
            messages.error(request, "Email is compulsory")
        if not name:
            messages.error(request, "Name is compulsory")
        
        if message and email and name:
            User = get_user_model()
            try:
                new_user = User.objects.create(
                    username=name,
                    email=email
                )
                new_user.save()
                messages.success(request, "Thanks for contacting us, we will get back to you shortly.")
            except Exception as e:
                messages.error(request, f"Thanks for contacting us, we will get back to you shortly.")
            return render(request, "app/index.html")

    return render(request, "app/contact_me.html")