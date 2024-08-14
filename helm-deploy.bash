#!/bin/bash

helm dependency update
helm upgrade -i demo . -n pgsql-demo --create-namespace
