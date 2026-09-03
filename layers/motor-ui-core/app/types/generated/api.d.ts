export interface paths {
    "/ekpro/tariff-sections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.ekpro.tariff-sections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ekpro/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.ekpro.products"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ekpro/products/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["v2.ekpro.products.batch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ai-system-prompts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.ai-system-prompts.index"];
        put?: never;
        post: operations["v2.ai-system-prompts.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ai-system-prompts/{aiSystemPrompt}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.ai-system-prompts.show"];
        put: operations["v2.ai-system-prompts.update"];
        post?: never;
        delete: operations["v2.ai-system-prompts.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin-navigations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all navigation items for the admin frontend
         * @description Returns a multidimensional array with nested items
         */
        get: operations["v2.admin-navigations.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/approvals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all approvals
         * @description Returns a paginated list of all approvals across all pages.
         */
        get: operations["approvals.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/approvals/{approval}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update an approval
         * @description Approve or reject a publishing approval request.
         */
        put: operations["approvals.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/approvals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List approvals for a builder page
         * @description Returns all approvals scoped to the given builder page via its publishable relationship.
         */
        get: operations["builderPageApprovals.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Show current page definition
         * @description Returns the current revision's definition for a builder page.
         */
        get: operations["builderPageDefinition.show"];
        /**
         * Update page definition
         * @description Creates a new revision with the provided page definition.
         */
        put: operations["builderPageDefinition.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/definition/{revision}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Show specific revision definition
         * @description Returns the definition for a specific revision of a builder page.
         */
        get: operations["builderPageDefinition.showRevision"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/draft-from-published": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a draft from the published revision
         * @description Clones the live revision into a new draft revision (is_current=true,
         *     is_published=false) without taking the published revision offline.
         */
        post: operations["builderPageDraftFromPublished.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Duplicate a builder page
         * @description Creates a complete duplicate of the builder page with a new UUID.
         */
        post: operations["builderPageDuplicate.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-page-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all builder page options
         * @description Returns a lightweight list of builder pages (id, uuid, name) for use in dropdowns and selects.
         */
        get: operations["builderPageOptions.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a preview
         * @description Stores the page definition in Redis cache and returns the preview domain.
         */
        post: operations["builderPagePreview.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/publication": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update publication status for a builder page
         * @description Handles publish, unpublish, schedule, and approval request based on user role.
         *     Editors and SuperAdmins can publish directly; other roles create an approval request (201).
         *     Returns 409 if a publishing time already exists.
         */
        put: operations["builderPagePublication.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/publishing-times": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List publishing times for a builder page
         * @description Returns all scheduled publishing times for the given builder page.
         */
        get: operations["builderPagePublishingTimes.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/publishing-times/{publishingTime}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete a publishing time */
        delete: operations["builderPagePublishingTimes.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/revisions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List revisions for a builder page
         * @description Returns all revisions for the given builder page's UUID.
         */
        get: operations["builderPageRevisions.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builderPage}/revisions/current": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Set current revision
         * @description Sets a specific revision as the current active revision.
         */
        put: operations["builderPageRevisions.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all builder pages
         * @description Returns a paginated list of builder pages with standardized V2 envelope.
         *     Supports `?search=` for Meilisearch full-text search.
         */
        get: operations["v2.builder-pages.index"];
        put?: never;
        /** Create a new builder page */
        post: operations["v2.builder-pages.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/{builder_page}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single builder page */
        get: operations["v2.builder-pages.show"];
        /** Update a builder page */
        put: operations["v2.builder-pages.update"];
        post?: never;
        /**
         * Delete a builder page
         * @description Deletes all revisions for the builder page UUID.
         */
        delete: operations["v2.builder-pages.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder-pages/uuid/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a builder page by UUID
         * @description Returns the current revision for the given UUID.
         */
        get: operations["builderPages.showByUuid"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all categories (flat)
         * @description Returns a flat, paginated list of all categories across all trees.
         */
        get: operations["flatCategories.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category-trees/{categoryTree}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.categories.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category-trees/{category_tree}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["v2.categories.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category-trees/{categoryTree}/categories/{category}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.categories.show"];
        put: operations["v2.categories.update"];
        post?: never;
        delete: operations["v2.categories.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category-trees": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.category-trees.index"];
        put?: never;
        post: operations["v2.category-trees.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category-trees/{category}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.category-trees.show"];
        put: operations["v2.category-trees.update"];
        post?: never;
        delete: operations["v2.category-trees.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category-trees/scope/{scope}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["categoryTrees.byScope"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/assistant/steps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.steps.index"];
        put?: never;
        post: operations["v2.steps.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/assistant/steps/{step}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.steps.show"];
        put: operations["v2.steps.update"];
        post?: never;
        delete: operations["v2.steps.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/assistant/clickpaths": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.clickpaths.index"];
        put?: never;
        post: operations["v2.clickpaths.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/assistant/clickpaths/{clickpath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.clickpaths.show"];
        put: operations["v2.clickpaths.update"];
        post?: never;
        delete: operations["v2.clickpaths.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/assistant/clickpaths/{clickpath}/steps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get steps for a given clickpath */
        get: operations["clickpaths.getSteps"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/client-frontend-config/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get client frontend config schema
         * @description Returns the schema definition for the client frontend_config JSON column.
         *     The admin frontend uses this to dynamically render form fields.
         */
        get: operations["clientFrontendConfigSchema.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.clients.index"];
        put?: never;
        post: operations["v2.clients.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clients/{client}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.clients.show"];
        put: operations["v2.clients.update"];
        post?: never;
        delete: operations["v2.clients.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/config-variables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.config-variables.index"];
        put?: never;
        post: operations["v2.config-variables.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/config-variables/{configVariable}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.config-variables.show"];
        put: operations["v2.config-variables.update"];
        post?: never;
        delete: operations["v2.config-variables.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/{custom_component}/publication": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update publication status of a custom component
         * @description Handles publish, unpublish, and approval request based on user role.
         *     Editors and SuperAdmins can publish directly; other roles create an approval request (201).
         *     Returns 409 if a publishing time already exists.
         */
        put: operations["customComponentPublication.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all custom components
         * @description Returns a paginated list of custom components with standardized V2 envelope.
         */
        get: operations["v2.custom-components.index"];
        put?: never;
        /** Create a new custom component */
        post: operations["v2.custom-components.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/{custom_component}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single custom component */
        get: operations["v2.custom-components.show"];
        /** Update a custom component */
        put: operations["v2.custom-components.update"];
        post?: never;
        /** Delete a custom component */
        delete: operations["v2.custom-components.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/uuid/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a custom component by its UUID */
        get: operations["customComponents.showByUuid"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/{custom_component}/definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the current definition of a custom component */
        get: operations["customComponentDefinition.show"];
        /** Update the definition of a custom component */
        put: operations["customComponentDefinition.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/{custom_component}/definition/{revision}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a specific revision definition of a custom component */
        get: operations["customComponentDefinition.showRevision"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/{custom_component}/revisions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all revisions for a custom component */
        get: operations["customComponentRevisions.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/{custom_component}/revisions/current": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set the current revision for a custom component */
        put: operations["customComponentRevisions.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/{custom_component}/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Duplicate a custom component
         * @description Creates a copy of the custom component with a new UUID.
         */
        post: operations["customComponentDuplicate.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-components/{custom_component}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List pages using this custom component
         * @description Returns a list of builder pages that reference this custom component.
         */
        get: operations["customComponentUsage.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.custom-content-fields.index"];
        put?: never;
        post: operations["v2.custom-content-fields.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-fields/{customContentField}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show a custom content field */
        get: operations["v2.custom-content-fields.show"];
        /** Update a custom content field */
        put: operations["v2.custom-content-fields.update"];
        post?: never;
        delete: operations["v2.custom-content-fields.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-fields/update-sort-positions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update sort positions of custom content fields */
        post: operations["customContentField.updateSortPositions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.custom-content-types.index"];
        put?: never;
        post: operations["v2.custom-content-types.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-types/{customContentType}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.custom-content-types.show"];
        put: operations["v2.custom-content-types.update"];
        post?: never;
        delete: operations["v2.custom-content-types.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-types/{customContentType}/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Duplicate a custom content type form */
        post: operations["v2.custom-content-types.duplicate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dashboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["dashboard.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dashboard/announcements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.announcements.index"];
        put?: never;
        post: operations["v2.announcements.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dashboard/announcements/{announcement}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["v2.announcements.update"];
        post?: never;
        delete: operations["v2.announcements.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dashboard/announcements/{announcement}/dismiss": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["dashboardAnnouncements.dismiss"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.domains.index"];
        put?: never;
        post: operations["v2.domains.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/domains/{domain}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.domains.show"];
        put: operations["v2.domains.update"];
        post?: never;
        delete: operations["v2.domains.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ekpro/leads/subjects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subjects
         * @description Retrieve available lead subjects from the Ekpro CRM.
         */
        get: operations["v2.ekpro.leads.subjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ekpro/leads/actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get actions
         * @description Retrieve available lead actions from the Ekpro CRM.
         */
        get: operations["v2.ekpro.leads.actions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ekpro/leads/subject-groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subject groups
         * @description Retrieve available lead subject groups from the Ekpro CRM.
         */
        get: operations["v2.ekpro.leads.subject-groups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ekpro/leads/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get channels
         * @description Retrieve available lead channels from the Ekpro CRM.
         */
        get: operations["v2.ekpro.leads.channels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.email-templates.index"];
        put?: never;
        post: operations["v2.email-templates.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email-templates/{emailTemplate}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.email-templates.show"];
        put: operations["v2.email-templates.update"];
        post?: never;
        delete: operations["v2.email-templates.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email-templates/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Duplicate email templates
         * @description Creates copies of the specified email templates.
         */
        post: operations["emailTemplates.duplicate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email-templates/{emailTemplate}/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Duplicate an email template
         * @description Creates a copy of the email template with name suffixed " (Kopie)"
         *     and a uuid-suffixed slug to keep it unique.
         */
        post: operations["v2.email-templates.duplicate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email-templates/{template_id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all forms and pages where the email template is used */
        get: operations["v2.email-templates.usage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/entity-configurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.entity-configurations.index"];
        put?: never;
        post: operations["v2.entity-configurations.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/entity-configurations/{entityConfiguration}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.entity-configurations.show"];
        put: operations["v2.entity-configurations.update"];
        post?: never;
        delete: operations["v2.entity-configurations.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.files.index"];
        put?: never;
        post: operations["v2.files.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files/{file}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.files.show"];
        put: operations["v2.files.update"];
        post?: never;
        delete: operations["v2.files.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files/{file}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List pages and components using this file
         * @description Returns a deduplicated list of builder pages and custom components
         *     that reference this file, grouped by UUID across revisions.
         */
        get: operations["v2.files.usage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/form-submissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.form-submissions.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/form-submissions/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.form-submissions.export"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/form-submissions/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["v2.form-submissions.bulk-destroy"];
        options?: never;
        head?: never;
        patch: operations["v2.form-submissions.bulk-update"];
        trace?: never;
    };
    "/form-submissions/{formSubmission}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.form-submissions.show"];
        put?: never;
        post?: never;
        delete: operations["v2.form-submissions.destroy"];
        options?: never;
        head?: never;
        patch: operations["v2.form-submissions.update"];
        trace?: never;
    };
    "/global-search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search across all modules
         * @description Performs a unified search across all indexed CMS modules. Results are ranked by
         *     Meilisearch relevance score and returned as a flat list. Use module prefix syntax
         *     (e.g. `user: admin`) to filter results to a single module.
         */
        get: operations["v2.global-search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/languages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.languages.index"];
        put?: never;
        post: operations["v2.languages.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/languages/{language}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.languages.show"];
        put: operations["v2.languages.update"];
        post?: never;
        delete: operations["v2.languages.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigations/seo-redirect-audit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Audit redirect navigations against the actual SEO redirects of a domain
         * @description EN-2268: a navigation of link_type "redirect" only decides where the
         *     *menu link* points. The server-side 301 that fires on a direct request
         *     to the old URL is a separate SeoRedirect row and is not created along
         *     with it, so entries silently end up without one — their slug then
         *     serves an empty page to bookmarks, shared links and search engines.
         *
         *     Redirects are stored per domain, so the caller must say which domain to
         *     audit against.
         */
        get: operations["navigationItems.seoRedirectAudit"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigation-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all navigation items for a client
         * @description Returns a flat, paginated list of all navigation items (non-root nodes)
         *     across all navigation trees for a given client_id.
         */
        get: operations["v2.navigation-items-flat.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigation-trees/{navigationTree}/navigation-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List navigation items in a tree
         * @description Returns a paginated list of navigation items within a navigation tree.
         */
        get: operations["v2.navigation-items.index"];
        put?: never;
        /** Create a navigation item */
        post: operations["v2.navigation-items.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigation-trees/{navigationTree}/navigation-items/{navigationItem}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single navigation item */
        get: operations["v2.navigation-items.show"];
        /** Update a navigation item */
        put: operations["v2.navigation-items.update"];
        post?: never;
        /** Delete a navigation item */
        delete: operations["v2.navigation-items.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigation-trees": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all navigation trees
         * @description Returns a paginated list of root navigation nodes with standardized V2 envelope.
         */
        get: operations["v2.navigation-trees.index"];
        put?: never;
        /** Create a new navigation tree */
        post: operations["v2.navigation-trees.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigation-trees/{navigation}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single navigation tree */
        get: operations["v2.navigation-trees.show"];
        /** Update a navigation tree */
        put: operations["v2.navigation-trees.update"];
        post?: never;
        /** Delete a navigation tree */
        delete: operations["v2.navigation-trees.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/permission-groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.permission-groups.index"];
        put?: never;
        post: operations["v2.permission-groups.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/permission-groups/{permissionGroup}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.permission-groups.show"];
        put: operations["v2.permission-groups.update"];
        post?: never;
        delete: operations["v2.permission-groups.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.permissions.index"];
        put?: never;
        post: operations["v2.permissions.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/permissions/{permission}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.permissions.show"];
        put: operations["v2.permissions.update"];
        post?: never;
        delete: operations["v2.permissions.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/permissions-items/{permissionGroup}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["permissions.items"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/publishing-times": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all publishing times
         * @description Returns a paginated list of all scheduled publishing times across all pages.
         */
        get: operations["publishingTimes.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.roles.index"];
        put?: never;
        post: operations["v2.roles.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/roles/{role}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.roles.show"];
        put: operations["v2.roles.update"];
        post?: never;
        delete: operations["v2.roles.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scores": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.scores.index"];
        put?: never;
        post: operations["v2.scores.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scores/{score}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.scores.show"];
        put: operations["v2.scores.update"];
        post?: never;
        delete: operations["v2.scores.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search-configs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.search-configs.index"];
        put?: never;
        post: operations["v2.search-configs.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search-configs/{searchConfig}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.search-configs.show"];
        put: operations["v2.search-configs.update"];
        post?: never;
        delete: operations["v2.search-configs.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seo-redirects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.seo-redirects.index"];
        put?: never;
        post: operations["v2.seo-redirects.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seo-redirects/{seoRedirect}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.seo-redirects.show"];
        put: operations["v2.seo-redirects.update"];
        post?: never;
        delete: operations["v2.seo-redirects.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seo-values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["v2.seo-values.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seo-values/{seoValue}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["v2.seo-values.update"];
        post?: never;
        delete: operations["v2.seo-values.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/topics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.topics.index"];
        put?: never;
        post: operations["v2.topics.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/topics/{topic}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["v2.topics.show"];
        put: operations["v2.topics.update"];
        post?: never;
        delete: operations["v2.topics.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scores/triggered": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List triggered scores
         * @description Returns paginated triggered scores from the last 365 days.
         */
        get: operations["triggeredScores.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scores/triggered/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search triggered scores
         * @description Search triggered scores by field conditions.
         */
        post: operations["triggeredScores.search"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all users
         * @description Returns a paginated list of users with standardized V2 envelope.
         */
        get: operations["v2.users.index"];
        put?: never;
        /** Create a new user */
        post: operations["v2.users.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single user */
        get: operations["v2.users.show"];
        /** Update a user */
        put: operations["v2.users.update"];
        post?: never;
        /** Delete a user */
        delete: operations["v2.users.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** AISystemPromptPatchRequest */
        AISystemPromptPatchRequest: {
            client_id?: number | null;
            name: string;
            prompt: string;
        };
        /** AISystemPromptPostRequest */
        AISystemPromptPostRequest: {
            client_id?: number | null;
            name: string;
            prompt: string;
        };
        /** AISystemPromptResource */
        AISystemPromptResource: {
            id: number;
            name: string;
            prompt: string;
            client?: components["schemas"]["ClientResource"] | null;
            client_id: number;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** ApprovalCollection */
        ApprovalCollection: components["schemas"]["ApprovalResource"][];
        /** ApprovalPostRequest */
        ApprovalPostRequest: {
            is_approved: boolean;
            is_rejected: boolean;
            comment?: string | null;
        };
        /** ApprovalResource */
        ApprovalResource: {
            id: number;
            is_approved: boolean;
            is_rejected: boolean;
            /** Format: date-time */
            to_be_published_at: string | null;
            comment: string | null;
            approved_by_client_id: number | null;
            client: components["schemas"]["ClientResource"] | null;
            /** Format: date-time */
            approved_at: string | null;
        };
        /** BuilderCustomComponentPatchRequest */
        BuilderCustomComponentPatchRequest: {
            name: string;
            /** @enum {integer} */
            client_id: "";
            language_id: number;
            tags?: string[] | null;
            categories?: number[] | null;
        };
        /** BuilderCustomComponentPostRequest */
        BuilderCustomComponentPostRequest: {
            name: string;
            /** @enum {integer} */
            client_id: "";
            language_id: number;
            tags?: string[] | null;
            categories?: number[] | null;
        };
        /** BuilderPageDefinitionPostRequest */
        BuilderPageDefinitionPostRequest: {
            id: number;
            page_definition: string;
        };
        /** BuilderPageDefinitionUpdateRequest */
        BuilderPageDefinitionUpdateRequest: {
            id: number;
            page_definition: string;
            /** @description Publishing — required so every revision gets an explicit publish state */
            is_published: boolean;
            /** Format: date-time */
            to_be_published_at?: string | null;
            /** @description Definition extras — already handled in service, now validated */
            form_configs?: string[];
            admin_scss?: string | null;
            global_css?: string | null;
            global_scss?: string | null;
            is_excluded_from_search_index?: boolean;
            /** @description Page metadata — optional, update only when present */
            name?: string;
            /** @enum {integer} */
            client_id?: "";
            language_id?: number;
            cache_type?: string;
            ttl?: number;
            tags?: string[] | null;
            categories?: string[] | null;
            is_excluded_from_search?: boolean;
            is_excluded_from_cookie_banner?: boolean;
        };
        /** BuilderPageOptionCollection */
        BuilderPageOptionCollection: components["schemas"]["BuilderPageOptionResource"][];
        /** BuilderPageOptionResource */
        BuilderPageOptionResource: {
            id: number;
            uuid: string;
            name: string;
        };
        /** BuilderPagePatchRequest */
        BuilderPagePatchRequest: {
            name: string;
            ttl: number;
            /** @enum {integer} */
            client_id: "";
            language_id: number;
            /** @enum {string} */
            cache_type: "always" | "never";
            /** @enum {string|null} */
            type?: "page" | "global_component" | null;
            is_excluded_from_cookie_banner?: boolean | null;
            is_excluded_from_search_index?: boolean | null;
            is_excluded_from_search?: boolean | null;
            admin_css?: string | null;
            admin_scss?: string | null;
            global_css?: string | null;
            global_scss?: string | null;
            tags?: string[] | null;
            categories?: number[] | null;
        };
        /** BuilderPagePostRequest */
        BuilderPagePostRequest: {
            name: string;
            ttl: number;
            /** @enum {integer} */
            client_id: "";
            language_id: number;
            /** @enum {string} */
            cache_type: "always" | "never";
            /** @enum {string|null} */
            type?: "page" | "global_component" | null;
            is_excluded_from_cookie_banner?: boolean | null;
            is_excluded_from_search_index?: boolean | null;
            is_excluded_from_search?: boolean | null;
            admin_css?: string | null;
            admin_scss?: string | null;
            global_css?: string | null;
            global_scss?: string | null;
            tags?: string[] | null;
            categories?: number[] | null;
        };
        /** BuilderPageResource */
        BuilderPageResource: {
            id: number;
            name: string;
            type: string;
            ttl: number | null;
            cache_type: string | null;
            page_definition?: Record<string, never> | null;
            uuid: string;
            is_current: boolean;
            is_published: boolean;
            /** Format: date-time */
            published_at: string | null;
            has_published_revision: string;
            published_revision_id: number | null;
            is_excluded_from_cookie_banner: boolean;
            is_excluded_from_search_index: boolean;
            is_excluded_from_search: boolean;
            admin_scss: string;
            client: components["schemas"]["ClientResource"] | null;
            client_id: number;
            language: components["schemas"]["LanguageResource"] | null;
            language_id: number;
            tags: string;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            publishing_time: components["schemas"]["PublishingTimeSummaryResource"][];
            seo_tags: components["schemas"]["SeoValueResource"][];
            global_css: string;
            global_scss: string;
            navigations?: components["schemas"]["NavigationSummaryResource"][];
            has_active_navigation: boolean;
            navigation_count: number;
            is_linked: boolean;
            categories: components["schemas"]["CategorySummaryResource"][];
        };
        /** BuilderPageRevisionCollection */
        BuilderPageRevisionCollection: components["schemas"]["BuilderPageRevisionResource"][];
        /** BuilderPageRevisionResource */
        BuilderPageRevisionResource: {
            id: number;
            uuid: string;
            name: string;
            is_current: boolean;
            is_published: boolean;
            /** Format: date-time */
            published_at: string | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** BuilderPageSetPublishedStatusRequest */
        BuilderPageSetPublishedStatusRequest: {
            is_published?: boolean;
            /** Format: date-time */
            to_be_published_at?: string | null;
            take_offline?: boolean | null;
        };
        /** BuilderPageSetRevisionRequest */
        BuilderPageSetRevisionRequest: {
            revision_id: number;
        };
        /** BuilderTemporaryPagePostRequest */
        BuilderTemporaryPagePostRequest: {
            page_definition: string;
            global_css?: string | null;
            uuid: string;
        };
        /** CategoryCollection */
        CategoryCollection: components["schemas"]["CategoryResource"][];
        /** CategoryPatchRequest */
        CategoryPatchRequest: {
            name: string;
            parent_id: number;
            previous_sibling_id?: string | null;
            next_sibling_id?: string | null;
        };
        /** CategoryPostRequest */
        CategoryPostRequest: {
            name: string;
            parent_id: number;
            previous_sibling_id?: string | null;
            next_sibling_id?: string | null;
        };
        /** CategoryResource */
        CategoryResource: {
            id: number;
            name: string;
            scope: string;
            parent_id: number | null;
            _lft: number;
            _rgt: number;
            level: number;
            /** @description Only include children when explicitly loaded - breaks Scramble recursion */
            children?: components["schemas"]["CategoryResource"][];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** CategorySummaryResource */
        CategorySummaryResource: {
            id: number;
            name: string;
            scope: string;
        };
        /** CategoryTreePatchRequest */
        CategoryTreePatchRequest: {
            name: string;
            scope: string;
        };
        /** CategoryTreePostRequest */
        CategoryTreePostRequest: {
            name: string;
            scope: string;
        };
        /** CategoryTreeResource */
        CategoryTreeResource: {
            id: number;
            name: string;
            scope: string;
            /** @description Only include children when explicitly loaded */
            children?: components["schemas"]["CategoryResource"][];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** ClickpathPatchRequest */
        ClickpathPatchRequest: {
            name: string;
            /** @enum {integer} */
            client_id: "";
            duration: number;
        };
        /** ClickpathPostRequest */
        ClickpathPostRequest: {
            name: string;
            /** @enum {integer} */
            client_id: "";
            duration: number;
        };
        /** ClickpathResource */
        ClickpathResource: {
            id: number;
            name: string;
            duration: number;
            client_id: number;
            client: components["schemas"]["ClientResource"];
        };
        /** ClickpathStepCollection */
        ClickpathStepCollection: components["schemas"]["ClickpathStepResource"][];
        /** ClickpathStepResource */
        ClickpathStepResource: {
            id: number;
            name: string;
            type: string;
            trigger_content: string;
            trigger_content_headline: string;
            layer_order_index: string;
            main_content: string;
            client_id: string;
            parent_id: string | null;
            parent_step_id: string;
        };
        /** ClientPatchRequest */
        ClientPatchRequest: {
            name: string;
            slug: string;
            address: string;
            zip: string;
            city: string;
            country_iso_3166_1: string;
            is_active: boolean;
            contact_name: string;
            /** Format: email */
            contact_email: string;
            contact_phone: string;
            /** Format: uri */
            website?: string | null;
            description?: string | null;
        };
        /** ClientPostRequest */
        ClientPostRequest: {
            name: string;
            slug: string;
            address: string;
            zip: string;
            city: string;
            country_iso_3166_1: string;
            is_active: boolean;
            contact_name: string;
            /** Format: email */
            contact_email: string;
            contact_phone: string;
            /** Format: uri */
            website?: string | null;
            description?: string | null;
        };
        /** ClientResource */
        ClientResource: {
            id: number;
            name: string;
            slug: string;
            address: string;
            zip: string;
            city: string;
            country_iso_3166_1: string;
            website: string;
            description: string;
            is_active: boolean;
            contact_name: string;
            contact_phone: string;
            contact_email: string;
            frontend_config: unknown[] | string;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** ConfigVariablePatchRequest */
        ConfigVariablePatchRequest: {
            package: string;
            group: string;
            name: string;
            value: string;
            is_invisible?: boolean | null;
        };
        /** ConfigVariablePostRequest */
        ConfigVariablePostRequest: {
            package: string;
            group: string;
            name: string;
            value: string;
            is_invisible?: boolean | null;
        };
        /** ConfigVariableResource */
        ConfigVariableResource: {
            id: number;
            package: string;
            group: string;
            name: string;
            value: string;
            is_invisible: boolean;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** CustomComponentResource */
        CustomComponentResource: {
            id: number;
            name: string;
            page_definition?: Record<string, never> | null;
            uuid: string;
            is_current: boolean;
            is_published: boolean;
            /**
             * @description True when the current record is a draft but a different
             *     revision of this component is still live — mirrors the
             *     BuilderPageResource field so the admin UI can render the
             *     "Entwurf, Live-Version noch online" state for both types.
             */
            has_published_revision: string;
            admin_scss: string | null;
            client: components["schemas"]["ClientResource"] | null;
            client_id: number;
            language: components["schemas"]["LanguageResource"] | null;
            language_id: number;
            tags: string;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            global_css: string | null;
            global_scss: string | null;
            categories: components["schemas"]["CategorySummaryResource"][];
        };
        /** CustomContentFieldPatchRequest */
        CustomContentFieldPatchRequest: {
            name: string;
            label: string;
            /** @description some fields do not require to have a label */
            default_value?: string | null;
            type: string;
            custom_content_type_id: number;
            options?: string[];
            sort_position: number;
            is_conditional?: boolean | null;
            is_repeatable?: boolean | null;
            is_hidden?: boolean | null;
            is_required?: boolean | null;
            show_in_grid?: boolean | null;
            legal_text?: string | null;
            ui_options?: string[] | null;
            placeholder?: string | null;
            field_data?: string | null;
        };
        /** CustomContentFieldPostRequest */
        CustomContentFieldPostRequest: {
            name: string;
            label: string;
            /** @description some fields do not require to have a label */
            default_value?: string | null;
            type: string;
            custom_content_type_id: number;
            options?: string[];
            sort_position: number;
            is_conditional?: boolean | null;
            is_repeatable?: boolean | null;
            is_hidden?: boolean | null;
            is_required?: boolean | null;
            show_in_grid?: boolean | null;
            legal_text?: string | null;
            ui_options?: string[] | null;
            placeholder?: string | null;
            field_data?: string | null;
        };
        /** CustomContentFieldResource */
        CustomContentFieldResource: {
            id: number;
            name: string;
            label: string;
            default_value: boolean | string;
            type: string;
            custom_content_type_id: number;
            field_data: string;
            sort_position: number;
            is_repeatable: boolean;
            is_required: boolean;
            is_hidden: boolean;
            options: string;
            ui_options: string;
            show_in_grid: boolean;
            legal_text: string;
            placeholder: string;
        };
        /** CustomContentTypePatchRequest */
        CustomContentTypePatchRequest: {
            name: string;
            /** @enum {integer} */
            client_id: "";
            type: string;
            is_searchable?: boolean | null;
            is_sortable?: boolean | null;
            slug?: string | null;
            integrations?: string[] | null;
        };
        /** CustomContentTypePostRequest */
        CustomContentTypePostRequest: {
            name: string;
            /** @enum {integer} */
            client_id: "";
            type: string;
            is_searchable?: boolean | null;
            is_sortable?: boolean | null;
            slug?: string | null;
            integrations?: string[] | null;
        };
        /** CustomContentTypeResource */
        CustomContentTypeResource: {
            id: number;
            name: string;
            slug: string;
            client_id: number;
            client: components["schemas"]["ClientResource"];
            type: string;
            is_searchable: boolean;
            is_sortable: boolean;
            integrations: Record<string, never> | unknown[] | null;
            fields?: components["schemas"]["CustomContentFieldResource"][];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** DashboardAnnouncementPostRequest */
        DashboardAnnouncementPostRequest: {
            title: string;
            body?: string | null;
            /** @enum {string} */
            type: "info" | "warning" | "error";
            /** @enum {string} */
            audience: "self" | "users" | "client";
            target_user_ids?: number[] | null;
            /**
             * @description Phase 8 follow-up to ZRMDEV-165: SuperAdmin can target any
             *     seeded client; everyone else is restricted to their pivot.
             *     The controller still falls back to $user->clients->first()?->id
             *     when client_id is omitted, but a non-admin caller can no longer
             *     poison rows by submitting a foreign client_id explicitly.
             * @enum {integer|null}
             */
            client_id?: "" | null;
            linkable_type?: string | null;
            linkable_id?: number | null;
            /** Format: date-time */
            starts_at?: string | null;
            /** Format: date-time */
            expires_at?: string | null;
            is_active?: boolean;
        };
        /** DashboardAnnouncementPutRequest */
        DashboardAnnouncementPutRequest: {
            title: string;
            body?: string | null;
            /** @enum {string} */
            type: "info" | "warning" | "error";
            /** @enum {string} */
            audience: "self" | "users" | "client";
            target_user_ids?: number[] | null;
            /**
             * @description Phase 8 follow-up to ZRMDEV-165: stops a multi-client editor
             *     from re-tagging an existing announcement into a foreign tenant
             *     by PUT'ing the foreign client_id.
             * @enum {integer|null}
             */
            client_id?: "" | null;
            linkable_type?: string | null;
            linkable_id?: number | null;
            /** Format: date-time */
            starts_at?: string | null;
            /** Format: date-time */
            expires_at?: string | null;
            is_active?: boolean;
        };
        /** DashboardAnnouncementResource */
        DashboardAnnouncementResource: {
            id: number;
            title: string;
            body: string;
            type: string;
            audience: string;
            target_user_ids: unknown[] | null;
            linkable_type: string | null;
            linkable_id: number | null;
            linkable_name: unknown;
            linkable_url: string | null;
            is_active: boolean;
            /** Format: date-time */
            starts_at: string | null;
            /** Format: date-time */
            expires_at: string | null;
            created_by: number | null;
            created_by_name: unknown;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** DomainPatchRequest */
        DomainPatchRequest: {
            client_id: number;
            is_active: boolean;
            name: string;
            protocol: string;
            host: string;
            port: number;
            path: string;
            is_preview_domain?: boolean;
            is_canonical?: boolean;
        };
        /** DomainPostRequest */
        DomainPostRequest: {
            client_id: number;
            is_active: boolean;
            name: string;
            protocol: string;
            host: string;
            port: number;
            path: string;
            is_preview_domain?: boolean;
            is_canonical?: boolean;
        };
        /** DomainResource */
        DomainResource: {
            id: number;
            name: string;
            client?: components["schemas"]["ClientResource"] | null;
            client_id: number;
            is_active: boolean;
            is_preview_domain: boolean;
            is_canonical: boolean;
            protocol: string;
            host: string;
            port: number;
            path: string;
            entity_configurations?: (components["schemas"]["EntityConfigurationResource"] & Record<string, never>)[];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** EmailTemplatePatchRequest */
        EmailTemplatePatchRequest: {
            client_id: number;
            language_id: number;
            name: string;
            slug?: string | null;
            subject: string;
            body_text?: string | null;
            body_html?: string | null;
            default_sender_name?: string | null;
            /** Format: email */
            default_sender_email?: string | null;
            default_recipient_name?: string | null;
            /** Format: email */
            default_recipient_email?: string | null;
            default_cc_email?: string | null;
            default_bcc_email?: string | null;
            default_replyto_name?: string | null;
            default_replyto_email?: string | null;
            has_body_html?: boolean | null;
        };
        /** EmailTemplatePostRequest */
        EmailTemplatePostRequest: {
            client_id: number;
            language_id: number;
            name: string;
            slug?: string | null;
            subject: string;
            body_text?: string | null;
            body_html?: string | null;
            default_sender_name?: string | null;
            /** Format: email */
            default_sender_email?: string | null;
            default_recipient_name?: string | null;
            /** Format: email */
            default_recipient_email?: string | null;
            default_cc_email?: string | null;
            default_bcc_email?: string | null;
            default_replyto_name?: string | null;
            default_replyto_email?: string | null;
            has_body_html?: boolean | null;
        };
        /** EmailTemplateResource */
        EmailTemplateResource: {
            id: number;
            name: string;
            slug: string;
            client?: components["schemas"]["ClientResource"] | null;
            client_id: number;
            language?: components["schemas"]["LanguageResource"] | null;
            language_id: number;
            subject: string;
            body_text: string;
            body_html: string;
            has_body_html: boolean;
            default_sender_name: string;
            default_sender_email: string;
            default_recipient_name: string;
            default_recipient_email: string;
            default_cc_email: string;
            default_bcc_email: string;
            default_replyto_email: string;
            default_replyto_name: string;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** EmailTemplateUsageResource */
        EmailTemplateUsageResource: {
            form_config_id: number;
            form_component_uuid: string;
            form_name: string;
            custom_content_type_id: number | null;
            usage_type: string;
            builder_page: string;
        };
        /** EntityConfigurationPatchRequest */
        EntityConfigurationPatchRequest: {
            configurable_type?: string;
            configurable_id?: number;
            config_variable_id?: number;
            value?: string | null;
        };
        /** EntityConfigurationPostRequest */
        EntityConfigurationPostRequest: {
            configurable_type: string;
            configurable_id: number;
            config_variable_id: number;
            value?: string | null;
        };
        /** EntityConfigurationResource */
        EntityConfigurationResource: {
            id: number;
            configurable_type: string;
            configurable_id: number;
            config_variable_id: number;
            config_variable?: components["schemas"]["ConfigVariableResource"];
            value: string | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** FileCollection */
        FileCollection: components["schemas"]["FileResource"][];
        /** FilePatchRequest */
        FilePatchRequest: {
            /** @enum {integer|null} */
            client_id?: "" | null;
            description: string;
            author: string;
            source: string;
            alt_text: string;
            is_global?: string | null;
            is_excluded_from_search_index?: boolean | null;
            tags?: string[] | null;
            categories: number[];
            file?: {
                dataUrl?: string | null;
                name?: string | null;
            } | null;
        };
        /** FilePostRequest */
        FilePostRequest: {
            /** @enum {integer|null} */
            client_id?: "" | null;
            description: string;
            author: string;
            source: string;
            alt_text: string;
            is_global?: string | null;
            is_excluded_from_search_index?: boolean | null;
            tags?: string[] | null;
            categories: number[];
            files: {
                dataUrl: string;
                name?: string | null;
            }[];
            file?: string | null;
        };
        /** FileResource */
        FileResource: {
            id: number;
            client_id: number | null;
            client?: components["schemas"]["ClientResource"] | null;
            description: string;
            author: string;
            source: string;
            is_global: boolean;
            alt_text: string;
            file: components["schemas"]["MediaResource"];
            categories: components["schemas"]["CategoryResource"][];
            exists: string | boolean;
            is_excluded_from_search_index: boolean;
            tags: string;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** FileUsageCollection */
        FileUsageCollection: components["schemas"]["FileUsageResource"][];
        /** FileUsageResource */
        FileUsageResource: {
            id: number;
            uuid: string;
            name: string;
            is_published: boolean;
            block_types: string;
        };
        /** FormSubmissionBulkRequest */
        FormSubmissionBulkRequest: {
            ids: number[];
            /** @enum {string} */
            status: "new" | "read";
        };
        /** FormSubmissionPatchRequest */
        FormSubmissionPatchRequest: {
            /** @enum {string} */
            status: "new" | "read";
        };
        /** FormSubmissionResource */
        FormSubmissionResource: {
            data: {
                id: number;
                uuid: string;
                client_id: number | null;
                custom_content_type_id: number | null;
                builder_page_id: number | null;
                form_component_uuid: string | null;
                form_name: string;
                user_email: string | null;
                data: unknown[];
                status: string;
                /** Format: date-time */
                read_at: string | null;
                read_by: number | null;
                ip: string | null;
                /** Format: date-time */
                created_at: string | null;
                /** Format: date-time */
                updated_at: string | null;
            };
        };
        /** GridActionRequest */
        GridActionRequest: {
            action: string;
            data: string[];
            all: boolean;
        };
        /** LanguagePatchRequest */
        LanguagePatchRequest: {
            iso_639_1: string;
            english_name: string;
            native_name: string;
        };
        /** LanguagePostRequest */
        LanguagePostRequest: {
            iso_639_1: string;
            english_name: string;
            native_name: string;
        };
        /** LanguageResource */
        LanguageResource: {
            id: number;
            iso_639_1: string;
            english_name: string;
            native_name: string;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** MediaResource */
        MediaResource: {
            collection: string;
            name: string;
            file_name: string;
            size: number;
            size_human: string;
            mime_type: string | null;
            url: string;
            local_url: string;
            path: string;
            uuid: string | null;
            /** Format: date-time */
            created_at: string | null;
            conversions: string;
        };
        /** NavigationItemResource */
        NavigationItemResource: {
            id: number;
            name: string;
            scope: string | null;
            slug: string | null;
            notification: components["schemas"]["NotificationResource"] | null;
            full_slug: string | null;
            is_visible: boolean;
            is_active: boolean;
            is_canonical: boolean;
            hide_slug_from_url: boolean;
            link_type: string | null;
            link_target: string | null;
            link_url: string | null;
            click_event: string | null;
            builder_page?: components["schemas"]["BuilderPageResource"];
            builder_page_uuid: string;
            builder_page_name: string | null;
            navigation_item_id: number | null;
            has_builder_page: boolean;
            has_redirection: boolean;
            /** @enum {string|null} */
            seo_redirect_status: "ok" | "missing" | null;
            has_external_url: boolean;
            assistant_clickpath_id: number | null;
            clickpath: components["schemas"]["ClickpathResource"] | null;
            client: components["schemas"]["ClientResource"] | null;
            language: components["schemas"]["LanguageResource"] | null;
            parent_id: number;
            _lft: number;
            _rgt: number;
            level: number;
            children?: components["schemas"]["NavigationItemResource"][];
            scorings: components["schemas"]["ScoreResource"][];
            tags: string;
            css_classes: unknown[] | null;
            root_node: string;
            root_node_name: string;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
            computed_link: string;
            main_navigation_item: components["schemas"]["NavigationItemResource"] | null;
        };
        /** NavigationPatchRequest */
        NavigationPatchRequest: {
            name: string;
            slug?: string | null;
            parent_id: number;
            previous_sibling_id?: number | null;
            next_sibling_id?: number | null;
            builder_page_uuid?: string | null;
            assistant_clickpath_id?: number | null;
            is_visible?: boolean | null;
            is_active?: boolean | null;
            link_type?: string | null;
            link_target?: string | null;
            link_url?: string | null;
            click_event?: string | null;
            hide_slug_from_url?: boolean | null;
            css_classes?: string[] | null;
            tags?: string[] | null;
            scorings?: {
                score?: number | null;
                topic_id?: number | null;
            }[] | null;
            /** @enum {integer|null} */
            client_id?: "" | null;
            is_canonical?: boolean;
        };
        /** NavigationPostRequest */
        NavigationPostRequest: {
            name: string;
            slug?: string | null;
            parent_id: number;
            previous_sibling_id?: number | null;
            next_sibling_id?: number | null;
            builder_page_uuid?: string | null;
            assistant_clickpath_id?: number | null;
            is_visible?: boolean | null;
            is_active?: boolean | null;
            link_type?: string | null;
            link_target?: string | null;
            link_url?: string | null;
            click_event?: string | null;
            hide_slug_from_url?: boolean | null;
            css_classes?: string[] | null;
            tags?: string[] | null;
            scorings?: {
                score?: number | null;
                topic_id?: number | null;
            }[] | null;
            /** @enum {integer|null} */
            client_id?: "" | null;
            is_canonical?: boolean;
        };
        /** NavigationReducedResource */
        NavigationReducedResource: {
            id: number;
            name: string;
            slug: string | null;
            full_slug: string | null;
            is_active: boolean;
            root_node: string;
            _lft: number;
            _rgt: number;
            children?: components["schemas"]["NavigationReducedResource"][];
            root_node_name: string | null;
        };
        /** NavigationSummaryResource */
        NavigationSummaryResource: {
            id: number;
            name: string;
            full_slug: string | null;
            is_active: boolean;
            scope: string | null;
            root_node: string;
            root_node_name: string;
        };
        /** NavigationTreePatchRequest */
        NavigationTreePatchRequest: {
            name: string;
            client_id: number;
            language_id: number;
            scope: string;
        };
        /** NavigationTreePostRequest */
        NavigationTreePostRequest: {
            name: string;
            client_id: number;
            language_id: number;
            scope: string;
        };
        /** NavigationTreeResource */
        NavigationTreeResource: {
            id: number;
            name: string;
            scope: string | null;
            client: components["schemas"]["ClientResource"] | null;
            client_id: number;
            language: components["schemas"]["LanguageResource"] | null;
            language_id: number;
            children: components["schemas"]["NavigationReducedResource"][] | components["schemas"]["NavigationItemResource"][] | null;
            parent: number | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** NotificationResource */
        NotificationResource: {
            id: number;
            headline: string | null;
            text: string | null;
            variante: string | null;
            link: string | null;
            button_text: string | null;
            can_be_hidden: boolean;
            is_active: boolean;
            navigation_id: number | null;
            media_attributes: Record<string, never> | null;
            has_media: string;
        };
        /** PermissionCollection */
        PermissionCollection: components["schemas"]["PermissionResource"][];
        /** PermissionGroupPatchRequest */
        PermissionGroupPatchRequest: {
            name: string;
            sort_position?: number | null;
            permissions?: number[] | null;
        };
        /** PermissionGroupPostRequest */
        PermissionGroupPostRequest: {
            name: string;
            sort_position?: number | null;
            permissions?: number[] | null;
        };
        /** PermissionGroupResource */
        PermissionGroupResource: {
            id: number;
            name: string;
            sort_position: number | null;
            permission_names?: unknown[];
            permissions?: components["schemas"]["PermissionResource"][];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** PermissionPatchRequest */
        PermissionPatchRequest: {
            name: string;
            guard_name: string;
            permission_group_id?: number | null;
        };
        /** PermissionPostRequest */
        PermissionPostRequest: {
            name: string;
            guard_name: string;
            permission_group_id?: number | null;
        };
        /** PermissionResource */
        PermissionResource: {
            id: number;
            name: string;
            guard_name: string;
            permission_group?: components["schemas"]["PermissionGroupResource"];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** PublishingTimeCollection */
        PublishingTimeCollection: components["schemas"]["PublishingTimeResource"][];
        /** PublishingTimeResource */
        PublishingTimeResource: {
            id: number;
            publishable_id: number;
            /** Format: date-time */
            to_be_published_at: string | null;
            name: string | null;
            client_id: number | null;
            language_id: number | null;
            client_name: string;
            language_native_name: string;
            is_published: boolean;
            uuid: string | null;
            /** Format: date-time */
            created_at: string | null;
            navigations: components["schemas"]["NavigationItemResource"][] | string[];
        };
        /** PublishingTimeSummaryResource */
        PublishingTimeSummaryResource: {
            id: number;
            publishable_id: number;
            /** Format: date-time */
            to_be_published_at: string | null;
            name: string | null;
            client_id: number | null;
            language_id: number | null;
            is_published: boolean;
            uuid: string | null;
            /** Format: date-time */
            created_at: string | null;
        };
        /** RolePatchRequest */
        RolePatchRequest: {
            name: string;
            guard_name: string;
            permissions?: number[] | null;
        };
        /** RolePostRequest */
        RolePostRequest: {
            name: string;
            guard_name: string;
            permissions?: number[] | null;
        };
        /** RoleResource */
        RoleResource: {
            id: number;
            name: string;
            guard_name: string;
            permissions?: components["schemas"]["PermissionResource"][];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** ScorePatchRequest */
        ScorePatchRequest: {
            topic_id: number;
            scorable_id: number;
            scorable_type: string;
            score: number;
            trigger?: string[] | null;
        };
        /** ScorePostRequest */
        ScorePostRequest: {
            topic_id: number;
            scorable_id: number;
            scorable_type: string;
            score: number;
            trigger?: string[] | null;
        };
        /** ScoreResource */
        ScoreResource: {
            id: number;
            topic_id: number;
            scorable_id: number;
            scorable_type: string;
            score: number;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** SearchConfigPatchRequest */
        SearchConfigPatchRequest: {
            file_id?: number | null;
            domain_id: number;
            teaser: string;
            headline: string;
            /** Format: uri */
            url: string;
            url_label: string;
            overline?: string | null;
            image_crop?: string[] | null;
            is_active?: boolean | null;
            links?: {
                position: number;
                /** Format: uri */
                url: string;
                url_label: string;
            }[];
            /** @enum {integer|null} */
            client_id?: "" | null;
        };
        /** SearchConfigPostRequest */
        SearchConfigPostRequest: {
            file_id?: number | null;
            domain_id: number;
            teaser: string;
            headline: string;
            /** Format: uri */
            url: string;
            url_label: string;
            overline?: string | null;
            image_crop?: string[] | null;
            is_active?: boolean | null;
            links?: {
                position: number;
                /** Format: uri */
                url: string;
                url_label: string;
            }[];
            /** @enum {integer|null} */
            client_id?: "" | null;
        };
        /** SearchConfigResource */
        SearchConfigResource: {
            id: number;
            domain_id: number;
            domain: components["schemas"]["DomainResource"] | null;
            is_active: boolean;
            url: string | null;
            url_label: string | null;
            links: unknown[] | null;
            overline: string | null;
            headline: string | null;
            teaser: string | null;
            image_crop: unknown[] | null;
            file_id: number | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** SeoRedirectPatchRequest */
        SeoRedirectPatchRequest: {
            categories?: number[];
            request_url: string;
            target_url?: string | null;
            http_status_code?: number | null;
            type?: string | null;
            domain_id: number;
        };
        /** SeoRedirectPostRequest */
        SeoRedirectPostRequest: {
            categories?: number[];
            request_url: string;
            target_url?: string | null;
            http_status_code?: number | null;
            type?: string | null;
            domain_id: number;
        };
        /** SeoRedirectResource */
        SeoRedirectResource: {
            id: number;
            request_url: string;
            target_url: string | null;
            http_status_code: number;
            type: string;
            client_id: string;
            domain_id: number;
            categories: components["schemas"]["CategorySummaryResource"][];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** SeoValuePatchRequest */
        SeoValuePatchRequest: {
            seoable_id: number;
            seoable_type: string;
            key: string;
            value: string;
            attribute_type: string;
            content?: string | null;
        };
        /** SeoValuePostRequest */
        SeoValuePostRequest: {
            seoable_id: number;
            seoable_type: string;
            key: string;
            value: string;
            attribute_type: string;
            content?: string | null;
        };
        /** SeoValueResource */
        SeoValueResource: {
            id: number | null;
            attribute_type: string | null;
            key: string | null;
            value: string | null;
            content: string | null;
            seoable_id: string;
            seoable_type: string;
            is_auto: boolean;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** StepPatchRequest */
        StepPatchRequest: {
            name: string;
            type: string;
            trigger_content: string;
            main_content: string;
            /** @enum {integer} */
            client_id: "";
            trigger_content_headline?: string | null;
            layer_order_index?: number | null;
            clickpath_id?: number | null;
            parent_id?: number | null;
            parent_step_id?: number | null;
        };
        /** StepPostRequest */
        StepPostRequest: {
            name: string;
            type: string;
            trigger_content: string;
            main_content: string;
            /** @enum {integer} */
            client_id: "";
            trigger_content_headline?: string | null;
            layer_order_index?: number | null;
            clickpath_id: number;
            parent_id?: number | null;
            parent_step_id?: number | null;
        };
        /** StepResource */
        StepResource: {
            id: number;
            name: string;
            type: string;
            trigger_content: string;
            trigger_content_headline: string;
            layer_order_index: number;
            main_content: string;
            client_id: number;
        };
        /** TopicPatchRequest */
        TopicPatchRequest: {
            /** @enum {integer} */
            client_id: "";
            name: string;
            categories: string[];
        };
        /** TopicPostRequest */
        TopicPostRequest: {
            /** @enum {integer} */
            client_id: "";
            name: string;
            categories: string[];
        };
        /** TopicResource */
        TopicResource: {
            id: number;
            client_id: number;
            client?: components["schemas"]["ClientResource"] | null;
            name: string;
            categories: components["schemas"]["CategoryResource"][] | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** TriggeredScoreCollection */
        TriggeredScoreCollection: (components["schemas"]["TriggeredScoreResource"] & Record<string, never>)[];
        /** TriggeredScoreResource */
        TriggeredScoreResource: {
            id: number;
            score_id: string;
            topic_id: number;
            topic?: components["schemas"]["TopicResource"];
            scorable_type: string;
            score: number;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** TriggeredScoreSearchRequest */
        TriggeredScoreSearchRequest: {
            search: {
                /** @enum {string} */
                field: "score_id" | "topic_id" | "scorable_type" | "score";
                /** @enum {string} */
                operation: "=" | "!=" | ">" | "<" | ">=" | "<=" | "like";
                value: string;
            }[];
        };
        /** UserPatchRequest */
        UserPatchRequest: {
            clients?: number[] | null;
            name: string;
            /** Format: email */
            email: string;
            password?: string | null;
            roles?: number[] | null;
            permissions?: number[] | null;
            avatar?: {
                dataUrl?: string | null;
                name?: string | null;
            } | null;
        };
        /** UserPostRequest */
        UserPostRequest: {
            clients?: number[] | null;
            name: string;
            /** Format: email */
            email: string;
            password: string;
            roles?: number[] | null;
            permissions?: number[] | null;
            avatar?: {
                dataUrl?: string | null;
                name?: string | null;
            } | null;
        };
        /** UserResource */
        UserResource: {
            id: number;
            name: string;
            email: string;
            avatar: components["schemas"]["MediaResource"] | null;
            clients?: components["schemas"]["ClientResource"][];
            roles?: components["schemas"]["RoleResource"][];
            permissions?: components["schemas"]["PermissionResource"][];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
    };
    responses: {
        /** @description Authorization error */
        AuthorizationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Unauthenticated */
        AuthenticationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Validation error */
        ValidationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Errors overview. */
                    message: string;
                    /** @description A detailed description of each field that failed validation. */
                    errors: {
                        [key: string]: string[];
                    };
                };
            };
        };
        /** @description Not found */
        ModelNotFoundException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "v2.ekpro.tariff-sections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string | null | Record<string, never>;
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Failed to fetch tariff sections";
                    };
                };
            };
        };
    };
    "v2.ekpro.products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string | null | Record<string, never>;
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Failed to fetch products";
                    };
                };
            };
        };
    };
    "v2.ekpro.products.batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    productIDs: string[];
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: (string | null | Record<string, never>)[];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: "Failed to fetch products";
                    };
                };
            };
        };
    };
    "v2.ai-system-prompts.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `AISystemPromptResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AISystemPromptResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.ai-system-prompts.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AISystemPromptPostRequest"];
            };
        };
        responses: {
            /** @description `AISystemPromptResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AISystemPromptResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "AI system prompt created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.ai-system-prompts.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ai system prompt ID */
                aiSystemPrompt: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `AISystemPromptResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AISystemPromptResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "AI system prompt retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.ai-system-prompts.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ai system prompt ID */
                aiSystemPrompt: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AISystemPromptPatchRequest"];
            };
        };
        responses: {
            /** @description `AISystemPromptResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AISystemPromptResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "AI system prompt updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.ai-system-prompts.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ai system prompt ID */
                aiSystemPrompt: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.admin-navigations.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            slug: string;
                            icon: string;
                            route: string | null;
                            roles: [
                                string
                            ];
                            permissions: [
                                string
                            ];
                            name: string;
                            items: {
                                slug: string;
                                icon: string;
                                route: string | null;
                                roles: [
                                    string
                                ];
                                permissions: [
                                    string
                                ];
                                aliases: [
                                    string
                                ];
                                name: string;
                            }[];
                        }[];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "approvals.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                is_approved?: boolean | null;
                is_rejected?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ApprovalResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApprovalResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "approvals.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The approval ID */
                approval: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApprovalPostRequest"];
            };
        };
        responses: {
            /** @description `ApprovalResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApprovalResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderPageApprovals.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ApprovalCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApprovalCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPageDefinition.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPageDefinition.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPageDefinitionUpdateRequest"];
            };
        };
        responses: {
            /** @description `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderPageDefinition.showRevision": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
                revision: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPageDraftFromPublished.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPageDuplicate.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPageOptions.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageOptionCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageOptionCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderPagePreview.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderTemporaryPagePostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderPagePublication.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BuilderPageSetPublishedStatusRequest"];
            };
        };
        responses: {
            /** @description `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderPagePublishingTimes.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `PublishingTimeCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PublishingTimeCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPagePublishingTimes.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
                /** @description The publishing time ID */
                publishingTime: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 204;
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPageRevisions.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageRevisionCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageRevisionCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPageRevisions.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builderPage: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPageSetRevisionRequest"];
            };
        };
        responses: {
            /** @description `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.builder-pages.index": {
        parameters: {
            query?: {
                search?: string | null;
                scope?: string | null;
                client_id?: number | null;
                language_id?: number | null;
                category_id?: number | null;
                is_current?: boolean | null;
                page?: number | null;
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.builder-pages.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPagePostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.builder-pages.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builder_page: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.builder-pages.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builder_page: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPagePatchRequest"];
            };
        };
        responses: {
            /** @description `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.builder-pages.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder page ID */
                builder_page: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 204;
                };
            };
            /** @description An error */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Error overview.
                         * @example No builder pages could be found that can be deleted.
                         */
                        message: string;
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderPages.showByUuid": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "flatCategories.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                parent_id?: number;
                scope?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CategoryCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.categories.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                parent_id?: number;
                scope?: string;
            };
            header?: never;
            path: {
                /** @description The category tree ID */
                categoryTree: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `CategoryResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.categories.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                category_tree: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryPostRequest"];
            };
        };
        responses: {
            /** @description `CategoryResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Category created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.categories.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The category tree ID */
                categoryTree: number;
                /** @description The category ID */
                category: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CategoryResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryResource"] & Record<string, never>;
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Category retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.categories.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The category tree ID */
                categoryTree: number;
                /** @description The category ID */
                category: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryPatchRequest"];
            };
        };
        responses: {
            /** @description `CategoryResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Category updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.categories.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The category tree ID */
                categoryTree: number;
                /** @description The category ID */
                category: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.category-trees.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.category-trees.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryTreePostRequest"];
            };
        };
        responses: {
            /** @description `CategoryTreeResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryTreeResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Category tree created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.category-trees.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                category: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CategoryTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryTreeResource"] & Record<string, never>;
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Category tree retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "v2.category-trees.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                category: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryTreePatchRequest"];
            };
        };
        responses: {
            /** @description `CategoryTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryTreeResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Category tree updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.category-trees.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                category: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "categoryTrees.byScope": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                scope: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CategoryTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryTreeResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Category tree retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "v2.steps.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number;
                type?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `StepResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StepResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.steps.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StepPostRequest"];
            };
        };
        responses: {
            /** @description `StepResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StepResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Step created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.steps.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The step ID */
                step: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `StepResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StepResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Step retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.steps.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The step ID */
                step: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StepPatchRequest"];
            };
        };
        responses: {
            /** @description `StepResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StepResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Step updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.steps.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The step ID */
                step: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.clickpaths.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ClickpathResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClickpathResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.clickpaths.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ClickpathPostRequest"];
            };
        };
        responses: {
            /** @description `ClickpathResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClickpathResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Clickpath created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.clickpaths.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The clickpath ID */
                clickpath: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ClickpathResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClickpathResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Clickpath retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.clickpaths.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The clickpath ID */
                clickpath: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ClickpathPatchRequest"];
            };
        };
        responses: {
            /** @description `ClickpathResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClickpathResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Clickpath updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.clickpaths.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The clickpath ID */
                clickpath: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "clickpaths.getSteps": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The clickpath ID */
                clickpath: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ClickpathStepCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClickpathStepCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Clickpath steps retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "clientFrontendConfigSchema.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            [key: string]: {
                                type: string;
                                required?: boolean;
                                default?: unknown;
                                label: string;
                            };
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "v2.clients.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                is_active?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ClientResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClientResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.clients.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ClientPostRequest"];
            };
        };
        responses: {
            /** @description `ClientResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClientResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Client created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.clients.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The client ID */
                client: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ClientResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClientResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Client retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.clients.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The client ID */
                client: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ClientPatchRequest"];
            };
        };
        responses: {
            /** @description `ClientResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClientResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Client updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.clients.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The client ID */
                client: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.config-variables.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                package?: string;
                group?: string;
                is_invisible?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ConfigVariableResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConfigVariableResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.config-variables.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ConfigVariablePostRequest"];
            };
        };
        responses: {
            /** @description `ConfigVariableResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConfigVariableResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Config variable created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.config-variables.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The config variable ID */
                configVariable: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ConfigVariableResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConfigVariableResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Config variable retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.config-variables.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The config variable ID */
                configVariable: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ConfigVariablePatchRequest"];
            };
        };
        responses: {
            /** @description `ConfigVariableResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConfigVariableResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Config variable updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.config-variables.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The config variable ID */
                configVariable: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customComponentPublication.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BuilderPageSetPublishedStatusRequest"];
            };
        };
        responses: {
            /** @description `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-components.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number | null;
                language_id?: number | null;
                is_current?: boolean | null;
                category_id?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-components.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderCustomComponentPostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-components.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.custom-components.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderCustomComponentPatchRequest"];
            };
        };
        responses: {
            /** @description `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-components.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 204;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customComponents.showByUuid": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "customComponentDefinition.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customComponentDefinition.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPageDefinitionPostRequest"];
            };
        };
        responses: {
            /** @description `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "customComponentDefinition.showRevision": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
                revision: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customComponentRevisions.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageRevisionCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageRevisionCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customComponentRevisions.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPageSetRevisionRequest"];
            };
        };
        responses: {
            /** @description `CustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomComponentResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "customComponentDuplicate.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customComponentUsage.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom component ID */
                custom_component: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageOptionCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageOptionCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.custom-content-fields.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                custom_content_type_id?: number | null;
                type?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `CustomContentFieldResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentFieldResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-content-fields.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentFieldPostRequest"];
            };
        };
        responses: {
            /** @description `CustomContentFieldResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentFieldResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Custom content field created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-content-fields.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content field ID */
                customContentField: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CustomContentFieldResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentFieldResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.custom-content-fields.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content field ID */
                customContentField: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentFieldPatchRequest"];
            };
        };
        responses: {
            /** @description `CustomContentFieldResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentFieldResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-content-fields.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content field ID */
                customContentField: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customContentField.updateSortPositions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string[];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Content field sort positions updated";
                        };
                    };
                };
            };
        };
    };
    "v2.custom-content-types.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number | null;
                type?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `CustomContentTypeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentTypeResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-content-types.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentTypePostRequest"];
            };
        };
        responses: {
            /** @description `CustomContentTypeResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentTypeResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Custom content type created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-content-types.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content type ID */
                customContentType: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CustomContentTypeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentTypeResource"] & Record<string, never>;
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Custom content type retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.custom-content-types.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content type ID */
                customContentType: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentTypePatchRequest"];
            };
        };
        responses: {
            /** @description `CustomContentTypeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentTypeResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Custom content type updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.custom-content-types.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content type ID */
                customContentType: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.custom-content-types.duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content type ID */
                customContentType: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "dashboard.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            stats: {
                                pages_total: number;
                                pages_draft: number;
                                pages_published: number;
                                pages_scheduled: number;
                                media_total: number;
                                navigation_trees: number;
                            };
                            activity: {
                                id: number;
                                description: string;
                                subject_type: string;
                                subject_id: number | null;
                                subject_name: unknown;
                                subject_exists: boolean;
                                causer_name: unknown;
                                created_at: string | null;
                            }[];
                            activity_meta: {
                                current_page: number;
                                last_page: number;
                                per_page: number;
                                total: number;
                            };
                            publishing_queue: {
                                id: number;
                                name: unknown;
                                to_be_published_at: null | string;
                                publishable_type: string;
                                publishable_id: number;
                            }[];
                            announcements: components["schemas"]["DashboardAnnouncementResource"][];
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "v2.announcements.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DashboardAnnouncementResource"][];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "v2.announcements.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DashboardAnnouncementPostRequest"];
            };
        };
        responses: {
            /** @description `DashboardAnnouncementResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DashboardAnnouncementResource"];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.announcements.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The announcement ID */
                announcement: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DashboardAnnouncementPutRequest"];
            };
        };
        responses: {
            /** @description `DashboardAnnouncementResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DashboardAnnouncementResource"];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            /** @description An error */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Error overview.
                         * @example
                         */
                        message: string;
                    };
                };
            };
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.announcements.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The announcement ID */
                announcement: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Announcement deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            /** @description An error */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Error overview.
                         * @example
                         */
                        message: string;
                    };
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "dashboardAnnouncements.dismiss": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The announcement ID */
                announcement: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Announcement dismissed";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.domains.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number;
                is_active?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `DomainResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.domains.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainPostRequest"];
            };
        };
        responses: {
            /** @description `DomainResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Domain created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.domains.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The domain ID */
                domain: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `DomainResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Domain retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.domains.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The domain ID */
                domain: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DomainPatchRequest"];
            };
        };
        responses: {
            /** @description `DomainResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Domain updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.domains.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The domain ID */
                domain: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.ekpro.leads.subjects": {
        parameters: {
            query?: {
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown;
                        meta: {
                            api_version: string;
                            message: string;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.ekpro.leads.actions": {
        parameters: {
            query?: {
                per_page?: number | null;
                subject?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown;
                        meta: {
                            api_version: string;
                            message: string;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.ekpro.leads.subject-groups": {
        parameters: {
            query?: {
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown;
                        meta: {
                            api_version: string;
                            message: string;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.ekpro.leads.channels": {
        parameters: {
            query?: {
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: unknown;
                        meta: {
                            api_version: string;
                            message: string;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.email-templates.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number;
                language_id?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `EmailTemplateResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EmailTemplateResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.email-templates.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailTemplatePostRequest"];
            };
        };
        responses: {
            /** @description `EmailTemplateResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EmailTemplateResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Email template created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.email-templates.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The email template ID */
                emailTemplate: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `EmailTemplateResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EmailTemplateResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Email template retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.email-templates.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The email template ID */
                emailTemplate: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailTemplatePatchRequest"];
            };
        };
        responses: {
            /** @description `EmailTemplateResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EmailTemplateResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Email template updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.email-templates.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The email template ID */
                emailTemplate: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "emailTemplates.duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GridActionRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta: {
                            api_version: string;
                            message: string;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.email-templates.duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The email template ID */
                emailTemplate: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.email-templates.usage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `EmailTemplateUsageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EmailTemplateUsageResource"][];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "v2.entity-configurations.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                configurable_type?: string;
                configurable_id?: number;
                config_variable_id?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `EntityConfigurationResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EntityConfigurationResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.entity-configurations.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EntityConfigurationPostRequest"];
            };
        };
        responses: {
            /** @description `EntityConfigurationResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EntityConfigurationResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Entity configuration created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.entity-configurations.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The entity configuration ID */
                entityConfiguration: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `EntityConfigurationResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EntityConfigurationResource"] & Record<string, never>;
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Entity configuration retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.entity-configurations.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The entity configuration ID */
                entityConfiguration: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["EntityConfigurationPatchRequest"];
            };
        };
        responses: {
            /** @description `EntityConfigurationResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EntityConfigurationResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Entity configuration updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.entity-configurations.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The entity configuration ID */
                entityConfiguration: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.files.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number;
                mime_type?: string;
                category_id?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `FileResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FileResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.files.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FilePostRequest"];
            };
        };
        responses: {
            /** @description `FileCollection` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FileCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "File created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.files.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The file ID */
                file: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `FileResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FileResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "File retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.files.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The file ID */
                file: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FilePatchRequest"];
            };
        };
        responses: {
            /** @description `FileResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FileResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "File updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.files.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The file ID */
                file: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.files.usage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The file ID */
                file: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `FileUsageCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FileUsageCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.form-submissions.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "v2.form-submissions.export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "Transfer-Encoding": "chunked";
                    [name: string]: unknown;
                };
                content: {
                    "text/csv; charset=UTF-8": string;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "v2.form-submissions.bulk-destroy": {
        parameters: {
            query?: {
                "ids[]"?: number[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta: {
                            deleted: number;
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.form-submissions.bulk-update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FormSubmissionBulkRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta: {
                            updated: number;
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.form-submissions.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The form submission ID */
                formSubmission: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `FormSubmissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FormSubmissionResource"] & {
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Form submission retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.form-submissions.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The form submission ID */
                formSubmission: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.form-submissions.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The form submission ID */
                formSubmission: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FormSubmissionPatchRequest"];
            };
        };
        responses: {
            /** @description `FormSubmissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FormSubmissionResource"] & {
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Form submission updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.global-search": {
        parameters: {
            query: {
                q: string;
                limit?: number;
                page?: number;
                module?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            module: string;
                            index: string;
                            id: number | string | null;
                            title: string | null;
                            excerpt: string | null;
                            meta: {
                                [key: string]: unknown;
                            };
                            score: number;
                        }[];
                        meta: {
                            api_version: string;
                            query: string;
                            parsed_module: string | null;
                            parsed_term: string;
                            total: number;
                            page: number;
                            per_page: number;
                            last_page: number;
                            modules: {
                                [key: string]: number;
                            };
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            /** @description An error */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Error overview.
                         * @example
                         */
                        message: string;
                    };
                };
            };
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.languages.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `LanguageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["LanguageResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.languages.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LanguagePostRequest"];
            };
        };
        responses: {
            /** @description `LanguageResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["LanguageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Language created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.languages.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The language ID */
                language: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `LanguageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["LanguageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Language retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.languages.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The language ID */
                language: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LanguagePatchRequest"];
            };
        };
        responses: {
            /** @description `LanguageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["LanguageResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Language updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.languages.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The language ID */
                language: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "navigationItems.seoRedirectAudit": {
        parameters: {
            query?: {
                domain_id?: string;
                status?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Redirect audit read";
                        data: string[];
                        meta: {
                            current_page: Record<string, never> | null;
                            last_page: Record<string, never> | null;
                            per_page: Record<string, never> | null;
                            total: number;
                            from: string | null;
                            to: string | null;
                            domain_id: number;
                            domain: string;
                            audit_total: number;
                            audit_missing: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Domain not found";
                    };
                };
            };
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "domain_id is required";
                    };
                };
            };
        };
    };
    "v2.navigation-items-flat.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "v2.navigation-items.index": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The navigation tree ID */
                navigationTree: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `NavigationItemResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationItemResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.navigation-items.store": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The navigation tree ID */
                navigationTree: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NavigationPostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.navigation-items.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The navigation tree ID */
                navigationTree: number;
                /** @description The navigation item ID */
                navigationItem: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `NavigationItemResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationItemResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.navigation-items.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The navigation tree ID */
                navigationTree: number;
                /** @description The navigation item ID */
                navigationItem: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NavigationPatchRequest"];
            };
        };
        responses: {
            /** @description `NavigationItemResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationItemResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.navigation-items.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The navigation tree ID */
                navigationTree: number;
                /** @description The navigation item ID */
                navigationItem: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 204;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.navigation-trees.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `NavigationTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationTreeResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "v2.navigation-trees.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NavigationTreePostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 201;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.navigation-trees.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The navigation ID */
                navigation: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `NavigationTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationTreeResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.navigation-trees.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The navigation ID */
                navigation: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NavigationTreePatchRequest"];
            };
        };
        responses: {
            /** @description `NavigationTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationTreeResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.navigation-trees.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The navigation ID */
                navigation: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": 204;
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.permission-groups.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `PermissionGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionGroupResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.permission-groups.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PermissionGroupPostRequest"];
            };
        };
        responses: {
            /** @description `PermissionGroupResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionGroupResource"] & Record<string, never>;
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Permission group created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.permission-groups.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The permission group ID */
                permissionGroup: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `PermissionGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionGroupResource"] & Record<string, never>;
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Permission group retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.permission-groups.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The permission group ID */
                permissionGroup: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PermissionGroupPatchRequest"];
            };
        };
        responses: {
            /** @description `PermissionGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionGroupResource"] & Record<string, never>;
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Permission group updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.permission-groups.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The permission group ID */
                permissionGroup: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.permissions.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                permission_group_id?: number;
                guard_name?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `PermissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.permissions.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PermissionPostRequest"];
            };
        };
        responses: {
            /** @description `PermissionResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Permission created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.permissions.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The permission ID */
                permission: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `PermissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Permission retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.permissions.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The permission ID */
                permission: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PermissionPatchRequest"];
            };
        };
        responses: {
            /** @description `PermissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Permission updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.permissions.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The permission ID */
                permission: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "permissions.items": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
            };
            header?: never;
            path: {
                /** @description The permission group ID */
                permissionGroup: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `PermissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionCollection"];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Permissions retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "publishingTimes.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number | null;
                is_published?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: string[];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.roles.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                guard_name?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `RoleResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["RoleResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.roles.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RolePostRequest"];
            };
        };
        responses: {
            /** @description `RoleResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["RoleResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Role created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.roles.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The role ID */
                role: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `RoleResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["RoleResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Role retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.roles.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The role ID */
                role: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RolePatchRequest"];
            };
        };
        responses: {
            /** @description `RoleResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["RoleResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Role updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.roles.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The role ID */
                role: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.scores.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number;
                topic_id?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `ScoreResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ScoreResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.scores.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScorePostRequest"];
            };
        };
        responses: {
            /** @description `ScoreResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ScoreResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Score created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.scores.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The score ID */
                score: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ScoreResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ScoreResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Score retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.scores.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The score ID */
                score: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScorePatchRequest"];
            };
        };
        responses: {
            /** @description `ScoreResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ScoreResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Score updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.scores.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The score ID */
                score: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.search-configs.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `SearchConfigResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SearchConfigResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "v2.search-configs.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SearchConfigPostRequest"];
            };
        };
        responses: {
            /** @description `SearchConfigResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SearchConfigResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Search config created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.search-configs.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The search config ID */
                searchConfig: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `SearchConfigResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SearchConfigResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Search config retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.search-configs.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The search config ID */
                searchConfig: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SearchConfigPatchRequest"];
            };
        };
        responses: {
            /** @description `SearchConfigResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SearchConfigResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Search config updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.search-configs.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The search config ID */
                searchConfig: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.seo-redirects.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `SeoRedirectResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoRedirectResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "v2.seo-redirects.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SeoRedirectPostRequest"];
            };
        };
        responses: {
            /** @description `SeoRedirectResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoRedirectResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "SEO redirect created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.seo-redirects.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The seo redirect ID */
                seoRedirect: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `SeoRedirectResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoRedirectResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "SEO redirect retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.seo-redirects.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The seo redirect ID */
                seoRedirect: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SeoRedirectPatchRequest"];
            };
        };
        responses: {
            /** @description `SeoRedirectResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoRedirectResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "SEO redirect updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.seo-redirects.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The seo redirect ID */
                seoRedirect: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.seo-values.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SeoValuePostRequest"];
            };
        };
        responses: {
            /** @description `SeoValueResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoValueResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "SEO value created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.seo-values.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The seo value ID */
                seoValue: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SeoValuePatchRequest"];
            };
        };
        responses: {
            /** @description `SeoValueResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoValueResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "SEO value updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.seo-values.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The seo value ID */
                seoValue: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.topics.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `TopicResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TopicResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.topics.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TopicPostRequest"];
            };
        };
        responses: {
            /** @description `TopicResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TopicResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Topic created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.topics.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The topic ID */
                topic: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `TopicResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TopicResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Topic retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.topics.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The topic ID */
                topic: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TopicPatchRequest"];
            };
        };
        responses: {
            /** @description `TopicResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TopicResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Topic updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.topics.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The topic ID */
                topic: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "triggeredScores.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `TriggeredScoreResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TriggeredScoreCollection"];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Triggered scores retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "triggeredScores.search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TriggeredScoreSearchRequest"];
            };
        };
        responses: {
            /** @description `TriggeredScoreCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TriggeredScoreCollection"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "Triggered scores search results";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.users.index": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `UserResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["UserResource"][];
                        links: {
                            first: string | null;
                            last: string | null;
                            prev: string | null;
                            next: string | null;
                        };
                        meta: {
                            current_page: number;
                            from: number | null;
                            last_page: number;
                            /** @description Generated paginator links. */
                            links: {
                                url: string | null;
                                label: string;
                                active: boolean;
                            }[];
                            /** @description Base path for paginator generated URLs. */
                            path: string | null;
                            /** @description Number of items shown per page. */
                            per_page: number;
                            /** @description Number of the last item in the slice. */
                            to: number | null;
                            /** @description Total number of items being paginated. */
                            total: number;
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.users.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserPostRequest"];
            };
        };
        responses: {
            /** @description `UserResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["UserResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "User created";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.users.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID */
                user: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `UserResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["UserResource"] & Record<string, never>;
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "User retrieved";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v2.users.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID */
                user: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserPatchRequest"];
            };
        };
        responses: {
            /** @description `UserResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["UserResource"];
                        meta: {
                            /** @constant */
                            api_version: "v2";
                            /** @constant */
                            message: "User updated";
                        };
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v2.users.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID */
                user: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
}
