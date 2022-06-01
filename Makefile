TAG?=latest

kustomize:
	cd manifests && kustomize edit set image ghcr.io/cloud-lada/frontend:$(TAG)

	kustomize build manifests -o deploy.yaml

zip:
	zip -j -r frontend.zip dist/*
