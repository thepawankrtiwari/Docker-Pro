
# base image
FROM python:3.6-slim

# Upgrade pip
RUN pip install --upgrade pip

# Working directory
WORKDIR /app

# code
COPY . .

# Install Flask
RUN pip install flask

# run
CMD ["python", "app.py"]
