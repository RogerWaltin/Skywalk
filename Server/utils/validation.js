const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateFields(fields, data) {
  const errors = [];

  for (const field of fields) {
    const value = data[field.name];
    const raw = typeof value === "string" ? value : "";

    if (field.required && !isNonEmptyString(raw)) {
      errors.push(`${field.label} is required.`);
      continue;
    }

    if (field.required && raw.trim().length > field.max) {
      errors.push(`${field.label} must be ${field.max} characters or fewer.`);
      continue;
    }

    if (field.type === "email" && raw.trim() !== "" && !EMAIL_PATTERN.test(raw.trim())) {
      errors.push(`A valid ${field.label.toLowerCase()} is required.`);
    }
  }

  return errors;
}
