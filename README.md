# roni-s-website
my present project for roni

## Running with Docker Compose

1. Install Docker and Docker Compose (for example, download the Compose binary with `curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose` and make it executable).
2. Install the Docker Engine packages (e.g., `sudo apt-get install -y docker.io`).
3. Start the Docker daemon so that the Compose CLI can talk to it.
4. From the repository root, run `docker-compose up -d` and open http://localhost in your browser.

> **Note:** In restricted or unprivileged environments (including some remote development containers), the Docker daemon may fail to start because it lacks the required kernel features or permissions. If that happens, you can still preview the site by serving `index.html` with a simple HTTP server such as `python -m http.server 3000`.

### Troubleshooting the daemon in this environment

We installed `docker.io` here and tried to start the daemon directly with

```bash
sudo dockerd --host=unix:///var/run/docker.sock --storage-driver=vfs --exec-opt native.cgroupdriver=cgroupfs
```

but it exited with `failed to create NAT chain DOCKER: iptables failed [...] Permission denied`, which indicates this container cannot grant Docker the required networking capabilities. As a result, `docker info` still reports “Cannot connect to the Docker daemon at unix:///var/run/docker.sock.” If you see the same behavior, use the HTTP server fallback above or run the project on a host where you can grant Docker the required kernel capabilities.
