# Medusa + Payload CMS + Starter Storefront Template

This repository serves as a **temporary integration template** combining:

- **Medusa JS**: Headless eCommerce backend.
- **Payload CMS**: Headless CMS for content management.
- **Medusa Starter Storefront**: Pre-built storefront for Medusa.

The goal is to use **Payload CMS** as the primary content source while serving the **Medusa storefront** under the `/store` route.

---

## 🚀 Project Structure

payloadmedusa/
├── medusa/ # Medusa JS backend
├── store/ # Payload APP + Storefront
├── .gitignore
└── LICENSE

- **`medusa/`**: Contains the Medusa backend server.
- **`store/`**: Contains the PayloadCMS + Medusa Starter Storefront, The store is mounted under `/store`.

---

## ⚙️ Local Development Setup

### 1. Medusa Backend

- **Directory**: `/medusa`
- **Default Port**: `9000`
- **Start Command**:

```bash
cd medusa
pnpm i
pnpm dev
```

```bash
Backend URL: http://localhost:9000/app
```

### 2. Payload CMS

- **Directory**: `/store`
- **Default Port**: `9000`
- **Start Command**:

```bash
cd store
pnpm i
pnpm dev
```

### 3 Medusa Storefront

Directory: /store/src/app/store
Route: /store
Access: http://localhost:8000/store
The storefront is mounted under the /store route in Payload CMS.
Currently contains the default Medusa Starter Storefront template.

## 🛠 Known Issues

Currently, the Medusa Starter Storefront inherits the Payload CMS header and navigation, which causes duplicate headers.

### To fix:

- Combine Payload CMS’s header/nav with the Medusa storefront header.
- Ensure the store’s routing and design integrates seamlessly with the CMS.

## 🎯 Next Steps

- Redesign Storefront
- Ensure a unified styling system for both CMS and storefront.
- Routing Validation
- Styling Updates
- Confirm all /store routes are functional.
- Ensure country-specific region middleware (if enabled) works correctly.

# 📌 Notes

This repository is intended as a work-in-progress template.
Useful for prototyping a CMS + eCommerce integration workflow.


## Contributions and improvements are welcome.

💻 References
[Medusa JS Documentation](https://docs.medusajs.com/)
[Payload CMS Documentation](https://payloadcms.com/docs/getting-started/what-is-payload)
[Medusa Starter Storefront Github](https://github.com/medusajs/nextjs-starter-medusa)
