{{- define "app.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "app.name" -}}
{{- .Values.nameOverride | default .Chart.Name -}}
{{- end -}}
cd