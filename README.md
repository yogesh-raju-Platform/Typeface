# Joke Generator – DevOps Project

## 📌 Project Overview
The **Joke Generator** is a full-stack web application designed to demonstrate modern DevOps practices. It consists of:
- A **FastAPI** backend that fetches random jokes
- A **ReactJS** frontend that displays the jokes to users

The project showcases containerization, orchestration, and CI/CD using Azure DevOps and Kubernetes.

---

## 🔧 Tech Stack
- **Frontend:** ReactJS
- **Backend:** FastAPI
- **CI/CD:** Azure DevOps
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **Registry:** Azure Container Registry (ACR)

---

## 🚀 What I Implemented

### 🔹 1. Backend (FastAPI)
- Built a REST API to return random jokes from an external public joke API
- Containerized using a clean, production-ready `Dockerfile`

### 🔹 2. Frontend (ReactJS)
- Built a simple interface using React
- Integrated Axios for API communication
- Dockerized with optimized image layering

### 🔹 3. CI/CD with Azure DevOps
- Created a multi-stage YAML pipeline:
  - **Build Stage:** Builds Docker images
  - **Push Stage:** Pushes images to ACR
  - **Deploy Stage:** Applies Kubernetes manifests using `kubectl`

### 🔹 4. Kubernetes Deployment
- Wrote deployment & service YAMLs for both frontend and backend
- Designed to work on local clusters (Minikube/kind) or cloud-based clusters
- Used labels/selectors for clean pod-service mapping

---

## 📦 Deployment Flow
1. Code pushed to Git repository
2. Azure DevOps pipeline triggers automatically
3. Builds & pushes Docker images to ACR
4. Deploys latest version to Kubernetes using `kubectl`

---

## ✅ Outcome
- End-to-end full-stack DevOps implementation
- Real-world use of Docker, Kubernetes, and Azure DevOps pipelines
- Demonstrates CI/CD, container orchestration, and infrastructure-as-code
