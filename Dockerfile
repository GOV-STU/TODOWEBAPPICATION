# Base image
FROM python:3.12

# Create a non-root user
RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

# Set working directory
WORKDIR /app

# Copy requirements and install
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY app/ ./app

# Expose Hugging Face required port
EXPOSE 7860

# Run the FastAPI app
CMD ["uvicorn", "app.main:app", "--reload"]