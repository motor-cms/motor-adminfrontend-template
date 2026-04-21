export interface paths {
    "/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
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
                            data: components["schemas"]["UserResource"];
                        };
                    };
                };
                401: components["responses"]["AuthenticationException"];
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
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
                            data: components["schemas"]["UserResource"];
                        };
                    };
                };
                401: components["responses"]["AuthenticationException"];
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/navigation_trees/{full_slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    full_slug: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
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
                        "application/json": string | Record<string, never>;
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
                            error: "Version file not found";
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/ekpro/tariff-sections": {
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
    "/v2/ekpro/products": {
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
    "/v2/ekpro/products/batch": {
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
    "/v2/ai-system-prompts": {
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
    "/v2/ai-system-prompts/{aiSystemPrompt}": {
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
    "/ai_help": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Return AI help response
         * @description Supports several providers (OpenAI, Anthropic, Google, Groq)
         */
        post: operations["aIHelp.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ai_system_prompts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["ai_system_prompts.index"];
        put?: never;
        /** Create record */
        post: operations["ai_system_prompts.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ai_system_prompts/{aiSystemPrompt}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["ai_system_prompts.show"];
        /** Update record */
        put: operations["ai_system_prompts.update"];
        post?: never;
        /** Delete record */
        delete: operations["ai_system_prompts.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ai_system_prompts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.ai_system_prompts.index"];
        put?: never;
        /** Create record */
        post: operations["v1.ai_system_prompts.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ai_system_prompts/{aiSystemPrompt}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.ai_system_prompts.show"];
        /** Update record */
        put: operations["v1.ai_system_prompts.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.ai_system_prompts.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin_navigations": {
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
        get: operations["admin_navigations.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/admin-navigations": {
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
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["approval.index"];
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
        /** Update record */
        put: operations["approval.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/approvals": {
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
    "/v2/approvals/{approval}": {
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
    "/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["auth.login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["auth.logout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Duplicate record with all its subcomponents */
        post: operations["builderCustomComponent.duplicate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["builder_custom_components.index"];
        put?: never;
        /** Create record */
        post: operations["builder_custom_components.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/{builder_custom_component}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["builder_custom_components.show"];
        /** Update record */
        put: operations["builder_custom_components.update"];
        post?: never;
        /** Delete record */
        delete: operations["builder_custom_components.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/{record}/published-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set published status for record */
        post: operations["builderCustomComponent.setPublishedStatus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/{record}/revision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get revisions for record */
        get: operations["builderCustomComponent.getRevisions"];
        put?: never;
        /** Set revision for record */
        post: operations["builderCustomComponent.setRevision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/{record}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get pages for record */
        get: operations["builderCustomComponent.getPages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/by_uuid/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a record by its UUID */
        get: operations["builderCustomComponent.showByUUID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/definition/current/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show current page definition */
        get: operations["builderCustomComponentDefinition.showCurrent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/definition/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show specific page definition */
        get: operations["builderCustomComponentDefinition.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_custom_components/definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create page definition */
        post: operations["builderCustomComponentDefinition.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/builder-pages/{builderPage}/approvals": {
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
    "/frontend/builder_page/definition/cache": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show a single record */
        get: operations["builderPageCaches.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/clear-nuxt-route-cache": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clear the Redis cache */
        post: operations["builderPageClearRedisCache.index"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page/definition/current/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show current page definition */
        get: operations["builderPageDefinition.showCurrent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page/definition/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show specific page definition */
        get: operations["motor.builder.builderPageDefinition.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page/definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create page definition */
        post: operations["builderPageDefinition.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/builder-pages/{builderPage}/definition": {
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
        get: operations["motor.builder.v2.builderPageDefinition.show"];
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
    "/v2/builder-pages/{builderPage}/definition/{revision}": {
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
    "/v2/builder-pages/{builderPage}/duplicate": {
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
    "/v2/builder-page-options": {
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
    "/v2/builder-pages/{builderPage}/preview": {
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
    "/v2/builder-pages/{builderPage}/publication": {
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
    "/v2/builder-pages/{builderPage}/publishing-times": {
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
    "/v2/builder-pages/{builderPage}/publishing-times/{publishingTime}": {
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
    "/v2/builder-pages/{builderPage}/revisions": {
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
    "/v2/builder-pages/{builderPage}/revisions/current": {
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
    "/builder_pages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["builder_pages.index"];
        put?: never;
        /** Create record */
        post: operations["builder_pages.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_pages/{builder_page}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show a single record */
        get: operations["builder_pages.show"];
        /** Update record */
        put: operations["builder_pages.update"];
        post?: never;
        /** Delete record */
        delete: operations["builder_pages.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_pages/by_uuid/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a record by its UUID */
        get: operations["builderPages.showByUUID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page_select_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all pages */
        get: operations["builderPages.pageList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search records */
        get: operations["motor.builder.builderPages.search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page/{record}/published-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set published status for record */
        post: operations["builderPages.setPublishedStatus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page/{id}/revision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get revisions for record */
        get: operations["builderPages.getRevisions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page/{record}/revision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set revision for record */
        post: operations["builderPages.setRevision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_page/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Duplicate record with all its subcomponents */
        post: operations["builderPages.duplicate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/builder_page/definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show a single record */
        get: operations["motor.builder.frontend.builderPages.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/builder_pages/search/{searchTerm}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Meilisearch Search function */
        get: operations["motor.builder.frontend.builderPages.search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/builder_pages/search_suggestion/{searchTerm}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get search suggestions based on a search term */
        get: operations["builderPages.suggestion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/builder-pages": {
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
    "/v2/builder-pages/{builder_page}": {
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
    "/v2/builder-pages/uuid/{uuid}": {
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
    "/builder_pages_reduced": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["builderPagesReduced.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_pages/publishing_times": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["publishing_times.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_pages/publishing_times/{publishingTime}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete record */
        delete: operations["publishing_times.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_temporary_page/definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create preview record */
        post: operations["builderTemporaryPages.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_temporary_page/definition/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Refresh preview record */
        post: operations["builderTemporaryPages.refresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/builder_temporary_page/generate_for_id": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create preview record for given id */
        post: operations["builderTemporaryPages.generateForId"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category_trees/{categoryTree}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["categories.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category_trees/{category_tree}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create record */
        post: operations["categories.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category_trees/{categoryTree}/categories/{category}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["categories.show"];
        /** Update record */
        put: operations["categories.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/category_trees/{category_tree}/categories/{category}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete record */
        delete: operations["categories.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/category_trees/{categoryTree}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.categories.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/category_trees/{category_tree}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create record */
        post: operations["v1.categories.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/category_trees/{categoryTree}/categories/{category}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.categories.show"];
        /** Update record */
        put: operations["v1.categories.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/category_trees/{category_tree}/categories/{category}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete record */
        delete: operations["v1.categories.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/categories": {
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
    "/v2/category-trees/{categoryTree}/categories": {
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
    "/v2/category-trees/{category_tree}/categories": {
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
    "/v2/category-trees/{categoryTree}/categories/{category}": {
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
    "/v2/category-trees": {
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
    "/v2/category-trees/{category}": {
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
    "/v2/category-trees/scope/{scope}": {
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["steps.index"];
        put?: never;
        /** Create record */
        post: operations["steps.store"];
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
        /** Get a single record */
        get: operations["steps.show"];
        /** Update record */
        put: operations["steps.update"];
        post?: never;
        /** Delete record */
        delete: operations["steps.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/assistant/steps": {
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
    "/v2/assistant/steps/{step}": {
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["clickpaths.index"];
        put?: never;
        /** Create record */
        post: operations["clickpaths.store"];
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
        /** Get a single record */
        get: operations["clickpaths.show"];
        /** Update record */
        put: operations["clickpaths.update"];
        post?: never;
        /** Delete record */
        delete: operations["clickpaths.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/assistant/clickpaths/{clickpath_id}/steps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get steps for a given clickpath */
        get: operations["motor.assistant.clickpaths.getSteps"];
        put?: never;
        /** Attach a step to a given clickpath */
        post: operations["clickpaths.attachStep"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/assistant/clickpaths/{clickpath_id}/steps/{step_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Detach a step to a given clickpath */
        delete: operations["clickpaths.detachStep"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/assistant/clickpaths": {
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
    "/v2/assistant/clickpaths/{clickpath}": {
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
    "/v2/assistant/clickpaths/{clickpath}/steps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get steps for a given clickpath */
        get: operations["motor.assistant.v2.clickpaths.getSteps"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/clickpaths": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all clickpaths */
        get: operations["motor.assistant.frontend.clickpaths.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/clickpaths/{clickpath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single clickpoth */
        get: operations["motor.assistant.frontend.clickpaths.show"];
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["clients.index"];
        put?: never;
        /** Create record */
        post: operations["clients.store"];
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
        /** Get a single record */
        get: operations["clients.show"];
        /** Update record */
        put: operations["clients.update"];
        post?: never;
        /** Delete record */
        delete: operations["clients.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/clients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.clients.index"];
        put?: never;
        /** Create record */
        post: operations["v1.clients.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/clients/{client}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.clients.show"];
        /** Update record */
        put: operations["v1.clients.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.clients.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/clients": {
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
    "/v2/clients/{client}": {
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
    "/v2/config-variables": {
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
    "/v2/config-variables/{configVariable}": {
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
    "/config_variables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["config_variables.index"];
        put?: never;
        /** Create record */
        post: operations["config_variables.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/config_variables/{configVariable}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["config_variables.show"];
        /** Update record */
        put: operations["config_variables.update"];
        post?: never;
        /** Delete record */
        delete: operations["config_variables.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/config_variables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.config_variables.index"];
        put?: never;
        /** Create record */
        post: operations["v1.config_variables.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/config_variables/{configVariable}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.config_variables.show"];
        /** Update record */
        put: operations["v1.config_variables.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.config_variables.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/custom-components/{custom_component}/publication": {
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
    "/v2/custom-components": {
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
    "/v2/custom-components/{custom_component}": {
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
    "/v2/custom-components/uuid/{uuid}": {
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
    "/v2/custom-components/{custom_component}/definition": {
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
    "/v2/custom-components/{custom_component}/definition/{revision}": {
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
    "/v2/custom-components/{custom_component}/revisions": {
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
    "/v2/custom-components/{custom_component}/revisions/current": {
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
    "/v2/custom-components/{custom_component}/duplicate": {
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
    "/v2/custom-components/{custom_component}/usage": {
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
    "/custom-content-types/update-sort-positions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update sort positions of custom content fields */
        post: operations["motor.contentType.customContentField.updateSortPositions"];
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["custom-content-fields.index"];
        put?: never;
        /** Create record */
        post: operations["custom-content-fields.store"];
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
        /** Get a single record */
        get: operations["custom-content-fields.show"];
        /** Update record */
        put: operations["custom-content-fields.update"];
        post?: never;
        /** Delete record */
        delete: operations["custom-content-fields.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-field/{customContentField}/fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attach a child field to a custom content field */
        post: operations["customContentField.attachField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-field/{field_parent_id}/fields/{field_child_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Detach a child field to a custom content field */
        delete: operations["customContentField.detachField"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-field-conditionals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create record */
        post: operations["custom-content-field-conditionals.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-field-conditionals/{customContentFieldConditional}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update record */
        put: operations["custom-content-field-conditionals.update"];
        post?: never;
        /** Delete record */
        delete: operations["custom-content-field-conditionals.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-field/data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create record */
        post: operations["motor.contentType.customContentFieldData.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-field/data/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all data for a given uuid */
        get: operations["customContentFieldData.index"];
        /** Update record */
        put: operations["customContentFieldData.update"];
        post?: never;
        /** Delete record */
        delete: operations["customContentFieldData.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/custom-content-field/data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create record */
        post: operations["motor.contentType.frontend.customContentFieldData.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/custom-content-fields": {
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
    "/v2/custom-content-fields/{customContentField}": {
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
    "/v2/custom-content-fields/update-sort-positions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update sort positions of custom content fields */
        post: operations["motor.contentType.v2.customContentField.updateSortPositions"];
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["custom-content-types.index"];
        put?: never;
        /** Create record */
        post: operations["custom-content-types.store"];
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
        /** Get a single record */
        get: operations["custom-content-types.show"];
        /** Update record */
        put: operations["custom-content-types.update"];
        post?: never;
        /** Delete record */
        delete: operations["custom-content-types.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-types-config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Get the configuration for a specific BuilderPage and FormComponent */
        post: operations["customContentType.getConfig"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-types/{customContentType}/data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get paginated and grouped CustomContentFieldData which belongs to CustomContentType */
        get: operations["customContentType.getContentTypeData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-type/{customContentType}/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attach a child CustomContentType to a parent CustomContentType */
        post: operations["customContentType.attachType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom-content-type/{type_parent_id}/types/{type_child_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Detach a child CustomContentType from a parent CustomContentType */
        delete: operations["customContentType.detachType"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/custom-content-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all records */
        get: operations["motor.contentType.frontend.customContentType.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/custom-content-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a single record
         *     TODO: refactor int $id
         */
        get: operations["motor.contentType.frontend.customContentType.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/custom_content_types/{content_type_id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all pages and email templates where the custom content type (form) is used */
        get: operations["custom_content_types.usage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/custom-content-types": {
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
    "/v2/custom-content-types/{customContentType}": {
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
    "/v2/dashboard": {
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
    "/v2/dashboard/announcements": {
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
    "/v2/dashboard/announcements/{announcement}": {
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
    "/v2/dashboard/announcements/{announcement}/dismiss": {
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["domains.index"];
        put?: never;
        /** Create record */
        post: operations["domains.store"];
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
        /** Get a single record */
        get: operations["domains.show"];
        /** Update record */
        put: operations["domains.update"];
        post?: never;
        /** Delete record */
        delete: operations["domains.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/frontend/domains/get_active_domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all active domains */
        get: operations["motor.admin.frontend.domains.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.domains.index"];
        put?: never;
        /** Create record */
        post: operations["v1.domains.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{domain}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.domains.show"];
        /** Update record */
        put: operations["v1.domains.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.domains.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/domains": {
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
    "/v2/domains/{domain}": {
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
    "/v2/ekpro/leads/subjects": {
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
    "/v2/ekpro/leads/actions": {
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
    "/v2/ekpro/leads/subject-groups": {
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
    "/v2/ekpro/leads/channels": {
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
    "/v2/email-templates": {
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
    "/v2/email-templates/{emailTemplate}": {
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
    "/v2/email-templates/duplicate": {
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
        post: operations["motor.admin.v2.emailTemplates.duplicate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/email-templates/{template_id}/usage": {
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
    "/email_templates/{template_id}/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all forms and pages where the email template is used */
        get: operations["email_templates.usage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email_templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["email_templates.index"];
        put?: never;
        /** Create record */
        post: operations["email_templates.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email_templates/{emailTemplate}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["email_templates.show"];
        /** Update record */
        put: operations["email_templates.update"];
        post?: never;
        /** Delete record */
        delete: operations["email_templates.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email_templates/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Duplicate record */
        post: operations["motor.admin.emailTemplates.duplicate_0"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email_templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.email_templates.index"];
        put?: never;
        /** Create record */
        post: operations["v1.email_templates.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email_templates/{emailTemplate}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.email_templates.show"];
        /** Update record */
        put: operations["v1.email_templates.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.email_templates.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/email_templates/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Duplicate record */
        post: operations["motor.admin.emailTemplates.duplicate_0_2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/email_templates/send": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Send email with template */
        post: operations["emailTemplatesSend.send"];
        delete?: never;
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["files.index"];
        put?: never;
        /** Create record */
        post: operations["files.store"];
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
        /** Get a single record */
        get: operations["files.show"];
        /** Update record */
        put: operations["files.update"];
        post?: never;
        /** Delete record */
        delete: operations["files.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/files": {
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
    "/v2/files/{file}": {
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
    "/v2/files/{file}/usage": {
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
    "/form-config-backfill/trigger": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Trigger the form config backfill process
         * @description This will dispatch jobs to process pages in chunks
         */
        post: operations["form_config_backfill.trigger"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/form-config-backfill/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the status/progress of the backfill */
        get: operations["form_config_backfill.status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/client_config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get client configuration
         * @description Returns per-client configuration (branding, feature flags, social links, SEO)
         *     resolved from the request hostname via Referer / x-forwarded-host headers.
         *     Response is served from the frontend disk cache and invalidated on client save.
         */
        get: operations["clientConfig.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/footer_definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get footer page definition
         * @description Returns the footer's builder page definition for the resolved client,
         *     cached separately from regular page definitions. The response format
         *     matches the standard builder page cache format (`{ "builder_page": { ... } }`).
         *
         *     Resolved from the request hostname via Referer / x-forwarded-host headers.
         *     The footer page UUID is resolved in order:
         *     1. `frontend_config.globalComponents.footer.{language_id}` on the client
         *     2. Navigation item with `scope = 'footer'` (legacy fallback)
         */
        get: operations["footerDefinition.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/global-search": {
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
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["health.healthCheckJsonResults"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/rpc/import/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["rpc.import.images"];
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["languages.index"];
        put?: never;
        /** Create record */
        post: operations["languages.store"];
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
        /** Get a single record */
        get: operations["languages.show"];
        /** Update record */
        put: operations["languages.update"];
        post?: never;
        /** Delete record */
        delete: operations["languages.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/languages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.languages.index"];
        put?: never;
        /** Create record */
        post: operations["v1.languages.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/languages/{language}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.languages.show"];
        /** Update record */
        put: operations["v1.languages.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.languages.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/languages": {
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
    "/v2/languages/{language}": {
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
    "/ekpro/leads/subjects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get subjects */
        get: operations["ekpro.leads.subjects"];
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
        /** Get actions */
        get: operations["ekpro.leads.actions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ekpro/leads/subjectgroups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get subject groups */
        get: operations["ekpro.leads.subjectgroups"];
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
        /** Get channels */
        get: operations["ekpro.leads.channels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["metrics.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/navigation-items": {
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
    "/v2/navigation-trees/{navigationTree}/navigation-items": {
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
    "/v2/navigation-trees/{navigationTree}/navigation-items/{navigationItem}": {
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
    "/frontend/navigation_tree/{scope}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get navigation tree collection by scope
         * @description The frontend reads `navigation/{host}.{scopes}.json` directly off the
         *     shared `frontend-cache` volume and only calls this endpoint when the
         *     file is missing. Every request therefore generates fresh data from the
         *     database and writes the cache file synchronously so the frontend has
         *     it available on its next read.
         */
        get: operations["navigationTree.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/navigation_trees": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get frontend navigation tree collection */
        get: operations["motor.builder.frontend.navigationTrees.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/navigation-trees": {
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
    "/v2/navigation-trees/{navigation}": {
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
    "/frontend/navigation/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Full slug of the navigation item */
        get: operations["frontend.navigations.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["navigations.index"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/navigations/{record}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["navigations.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/permission-groups": {
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
    "/v2/permission-groups/{permissionGroup}": {
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
    "/permission_groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["permission_groups.index"];
        put?: never;
        /** Create record */
        post: operations["permission_groups.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/permission_groups/{permissionGroup}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["permission_groups.show"];
        /** Update record */
        put: operations["permission_groups.update"];
        post?: never;
        /** Delete record */
        delete: operations["permission_groups.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/permission_groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.permission_groups.index"];
        put?: never;
        /** Create record */
        post: operations["v1.permission_groups.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/permission_groups/{permissionGroup}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.permission_groups.show"];
        /** Update record */
        put: operations["v1.permission_groups.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.permission_groups.destroy"];
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["permissions.index"];
        put?: never;
        /** Create record */
        post: operations["permissions.store"];
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
        /** Get a single record */
        get: operations["permissions.show"];
        /** Update record */
        put: operations["permissions.update"];
        post?: never;
        /** Delete record */
        delete: operations["permissions.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/permissions_items/{permissionGroup}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get permissions for a permission group
         * @description This will return a paginated response with 25 records per page
         */
        get: operations["motor.admin.permissions.items_0"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.permissions.index"];
        put?: never;
        /** Create record */
        post: operations["v1.permissions.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/permissions/{permission}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.permissions.show"];
        /** Update record */
        put: operations["v1.permissions.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.permissions.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/permissions_items/{permissionGroup}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get permissions for a permission group
         * @description This will return a paginated response with 25 records per page
         */
        get: operations["motor.admin.permissions.items_0_2"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/permissions": {
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
    "/v2/permissions/{permission}": {
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
    "/v2/permissions-items/{permissionGroup}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["motor.admin.v2.permissions.items"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/preview/get_content/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get page definition for a given UUID */
        get: operations["get_content"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get current users profile */
        get: operations["profile.read"];
        /** Update the user profile */
        put: operations["profile.update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile/reset-onboarding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set show_onboarding flag so the tour restarts on next dashboard visit */
        post: operations["profile.reset-onboarding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile/complete-onboarding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clear show_onboarding flag after the tour has completed */
        post: operations["profile.complete-onboarding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/publishing-times": {
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
    "/robot_txt_navigations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get excluded navigations for robots.txt */
        get: operations["robotTxtNavigation.getRobotTxtNavigations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/robots_txt/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the content of a robots.txt file */
        get: operations["robotTxtNavigation.getRobotsTxtFileContent"];
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["roles.index"];
        put?: never;
        /** Create record */
        post: operations["roles.store"];
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
        /** Get a single record */
        get: operations["roles.show"];
        /** Update record */
        put: operations["roles.update"];
        post?: never;
        /** Delete record */
        delete: operations["roles.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.roles.index"];
        put?: never;
        /** Create record */
        post: operations["v1.roles.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/roles/{role}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.roles.show"];
        /** Update record */
        put: operations["v1.roles.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.roles.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/roles": {
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
    "/v2/roles/{role}": {
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["scores.index"];
        put?: never;
        /** Create record */
        post: operations["scores.store"];
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
        /** Get a single record */
        get: operations["scores.show"];
        /** Update record */
        put: operations["scores.update"];
        post?: never;
        /** Delete record */
        delete: operations["scores.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/scores": {
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
    "/v2/scores/{score}": {
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
    "/search_configs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["search_configs.index"];
        put?: never;
        /** Create record */
        post: operations["search_configs.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search_configs/{searchConfig}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show a single record */
        get: operations["search_configs.show"];
        /** Update record */
        put: operations["search_configs.update"];
        post?: never;
        /** Delete record */
        delete: operations["search_configs.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/search_configs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get search configurations for request domain */
        get: operations["motor.builder.frontend.searchConfigs.show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/search-configs": {
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
    "/v2/search-configs/{searchConfig}": {
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
    "/seo_redirects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["seo_redirects.index"];
        put?: never;
        /** Create record */
        post: operations["seo_redirects.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seo_redirects/{seoRedirect}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show a single record */
        get: operations["seo_redirects.show"];
        /** Update record */
        put: operations["seo_redirects.update"];
        post?: never;
        /** Delete record */
        delete: operations["seo_redirects.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/get_redirection_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Get all redirections for given domain */
        post: operations["seoRedirect.getRedirectionList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/frontend/check_redirection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Check if a redirection exists for the given request URL */
        post: operations["seoRedirect.checkRedirection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/seo-redirects": {
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
    "/v2/seo-redirects/{seoRedirect}": {
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
    "/seo_values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["seo_values.index"];
        put?: never;
        /** Create record */
        post: operations["seo_values.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seo_values/{seoValue}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Show a single record */
        get: operations["seo_values.show"];
        /** Update record */
        put: operations["seo_values.update"];
        post?: never;
        /** Delete record */
        delete: operations["seo_values.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seo_values/page/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Seo Values for given page id */
        get: operations["seoValue.getPageSeoValues"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/seo-values": {
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
    "/v2/seo-values/{seoValue}": {
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
    "/frontend/sitemaps/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the content of a sitemap file */
        get: operations["sitemaps.getSitemapFileContent"];
        put?: never;
        post?: never;
        delete?: never;
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
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["topics.index"];
        put?: never;
        /** Create record */
        post: operations["topics.store"];
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
        /** Get a single record */
        get: operations["topics.show"];
        /** Update record */
        put: operations["topics.update"];
        post?: never;
        /** Delete record */
        delete: operations["topics.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/topics": {
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
    "/v2/topics/{topic}": {
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
    "/v2/scores/triggered": {
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
    "/v2/scores/triggered/search": {
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
    "/scores/triggered/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Search triggered scores */
        post: operations["triggeredScore.searchTriggeredScores"];
        delete?: never;
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
         * @description Returns all triggered scores in the last 365 days.
         */
        get: operations["triggeredScore.getTriggeredScores"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scores/trigger": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Trigger a score */
        post: operations["triggeredScore.trigger"];
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
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["users.index"];
        put?: never;
        /** Create record */
        post: operations["users.store"];
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
        /** Get a single record */
        get: operations["users.show"];
        /** Update record */
        put: operations["users.update"];
        post?: never;
        /** Delete record */
        delete: operations["users.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List/search all records
         * @description This will return a paginated response. Some limited search operations are also possible.
         */
        get: operations["v1.users.index"];
        put?: never;
        /** Create record */
        post: operations["v1.users.store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/users/{user}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single record */
        get: operations["v1.users.show"];
        /** Update record */
        put: operations["v1.users.update"];
        post?: never;
        /** Delete record */
        delete: operations["v1.users.destroy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/users": {
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
    "/v2/users/{user}": {
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
        /** AIHelpPostRequest */
        AIHelpPostRequest: {
            prompt: string;
            system_prompt: number;
        };
        /** AIHelpResource */
        AIHelpResource: {
            message: string;
        };
        /** AISystemPromptCollection */
        AISystemPromptCollection: string[];
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
            client: components["schemas"]["ClientResource"];
            client_id: number;
            name: string;
            prompt: string;
        };
        /** ApprovalCollection */
        ApprovalCollection: string[];
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
            to_be_published_at: string;
            comment: string | null;
            approved_by_client_id: number;
            client?: components["schemas"]["ClientResource"];
            approved_at: string;
        };
        /** BaseResource */
        BaseResource: string;
        /** BuilderCustomComponentCollection */
        BuilderCustomComponentCollection: string[];
        /** BuilderCustomComponentPatchRequest */
        BuilderCustomComponentPatchRequest: {
            name: string;
            client_id: number;
            language_id: number;
            tags?: string[] | null;
            categories?: number[] | null;
        };
        /** BuilderCustomComponentPostRequest */
        BuilderCustomComponentPostRequest: {
            name: string;
            client_id: number;
            language_id: number;
            tags?: string[] | null;
            categories?: number[] | null;
        };
        /** BuilderCustomComponentResource */
        BuilderCustomComponentResource: {
            id: number;
            name: string;
            page_definition: null | Record<string, never> | "";
            uuid: string;
            is_current: boolean;
            is_published: boolean;
            admin_scss: string | null;
            client?: components["schemas"]["ClientResource"];
            client_id: number;
            language?: components["schemas"]["LanguageResource"];
            language_id: number | null;
            tags: string;
            created_at: string;
            updated_at: string;
            global_css: string | null;
            global_scss: string | null;
            categories?: components["schemas"]["CategoryResource"][];
        };
        /** BuilderPage */
        BuilderPage: {
            id: number;
            client_id: number;
            language_id: number | null;
            name: string;
            type: components["schemas"]["BuilderPageType"];
            cache_type: string;
            ttl: number;
            page_definition: string;
            global_scss: string | null;
            global_css: string | null;
            admin_scss: string | null;
            uuid: string;
            is_current: boolean;
            is_published: boolean;
            is_excluded_from_search: number;
            is_excluded_from_search_index: number;
            is_excluded_from_cookie_banner: number;
            /** Format: date-time */
            published_at: string | null;
            created_by: number | null;
            updated_by: number | null;
            deleted_by: number | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** BuilderPageCollection */
        BuilderPageCollection: string[];
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
            client_id?: number;
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
            client_id: number;
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
            client_id: number;
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
        /** BuilderPageReducedCollection */
        BuilderPageReducedCollection: string[];
        /** BuilderPageReducedResource */
        BuilderPageReducedResource: {
            id: number;
            name: string;
            uuid: string;
            is_current: boolean;
            is_published: boolean;
            client_id: number;
            language_id: number | null;
            created_at: string;
            updated_at: string;
        };
        /** BuilderPageResource */
        BuilderPageResource: {
            id: number;
            name: string;
            ttl: number;
            cache_type: string;
            /** @description 'page_definition' => $request->get('omitPageDefinition') ? '' : $this->page_definition,  Weird fix because the json cast omits array keys that are not incremental and returns a json array instead of an object */
            page_definition: null | Record<string, never> | "";
            /** @description Weird fix because the json cast omits array keys that are not incremental and returns a json array instead of an object */
            uuid: string;
            is_current: boolean;
            is_published: boolean;
            /** Format: date-time */
            published_at: string | null;
            is_excluded_from_cookie_banner: boolean;
            is_excluded_from_search_index: boolean;
            is_excluded_from_search: boolean;
            admin_scss: string | null | "";
            client: components["schemas"]["ClientResource"];
            client_id: number;
            language: components["schemas"]["LanguageResource"];
            language_id: number | null;
            tags: string;
            created_at: string;
            updated_at: string;
            publishing_time: components["schemas"]["PublishingTimeResource"][];
            seo_tags: components["schemas"]["SeoValueResource"][];
            global_css: string | null | "";
            global_scss: string | null | "";
            navigations?: components["schemas"]["NavigationResource"][];
            categories: components["schemas"]["CategoryResource"][];
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
            published_at: string;
            created_at: string;
            updated_at: string;
        };
        /** BuilderPageSearchResource */
        BuilderPageSearchResource: {
            name: string | "";
            teaser: string | "";
            full_slug: string | "";
            image: string | "";
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
        /**
         * BuilderPageType
         * @enum {string}
         */
        BuilderPageType: "page" | "global_component";
        /** BuilderTemporaryPageForIDRequest */
        BuilderTemporaryPageForIDRequest: {
            pageUUID: string;
            uuid: string;
            client_id: number;
        };
        /** BuilderTemporaryPagePostRequest */
        BuilderTemporaryPagePostRequest: {
            page_definition: string;
            global_css?: string | null;
            uuid: string;
        };
        /** BuilderTemporaryPageResource */
        BuilderTemporaryPageResource: {
            uuid: string;
            id: string;
            client_id: string;
            language_id: string;
            page_definition: string;
            global_css: string;
        };
        /** CategoryCollection */
        CategoryCollection: string[];
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
            parent_id: number;
            _lft: number;
            _rgt: number;
            level: number;
            children?: components["schemas"]["CategoryResource"][];
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
            children?: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"][];
            created_at: string;
            updated_at: string;
        };
        /** ClickpathAttachStepPostRequest */
        ClickpathAttachStepPostRequest: {
            step_id: number;
            parent_id?: number | null;
        };
        /** ClickpathCollection */
        ClickpathCollection: string[];
        /** ClickpathPatchRequest */
        ClickpathPatchRequest: {
            name: string;
            client_id: number;
            duration: number;
        };
        /** ClickpathPostRequest */
        ClickpathPostRequest: {
            name: string;
            client_id: number;
            duration: number;
        };
        /** ClickpathResource */
        ClickpathResource: {
            id: number;
            name: string;
            duration: number;
            client?: components["schemas"]["ClientResource"] | null;
            client_id: number;
            steps?: components["schemas"]["StepResource"][] | null;
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
            parent_id: string;
            parent_step_id: string;
        };
        /** ClientCollection */
        ClientCollection: string[];
        /** ClientConfigResource */
        ClientConfigResource: {
            slug: string;
            colorScheme: unknown;
            logoSlug: unknown;
            brand: {
                name: unknown;
                logoAlt: unknown;
            };
            contact: {
                contactUrl: unknown;
                email: unknown;
                whatsappUrl: unknown;
            };
            features: {
                orderLine: boolean;
                appointments: boolean;
                clickpath: boolean;
                footerMenu: boolean;
            };
            social: {
                instagram: unknown;
                facebook: unknown;
            };
            seo: {
                siteName: unknown;
            };
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
            description: string | null;
            is_active: boolean;
            contact_name: string;
            contact_phone: string;
            contact_email: string;
        };
        /** ConfigVariableCollection */
        ConfigVariableCollection: string[];
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
            client: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            client_id: number;
            language: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"];
            language_id: number | null;
            tags: string;
            created_at: string;
            updated_at: string;
            global_css: string | null;
            global_scss: string | null;
            categories: components["schemas"]["CategorySummaryResource"][];
        };
        /** CustomContentFieldAttachPostRequest */
        CustomContentFieldAttachPostRequest: {
            child_field_id: number;
        };
        /** CustomContentFieldConditionalPatchRequest */
        CustomContentFieldConditionalPatchRequest: {
            field_id: number;
            conditional: string;
            value: string;
        };
        /** CustomContentFieldConditionalPostRequest */
        CustomContentFieldConditionalPostRequest: {
            field_id: number;
            conditional: string;
            value: string;
        };
        /** CustomContentFieldConditionalResource */
        CustomContentFieldConditionalResource: {
            id: number;
            field_id: number;
            conditional: string;
            value: string;
        };
        /** CustomContentFieldData */
        CustomContentFieldData: {
            id: number;
            custom_content_field_id: number;
            uuid: string;
            data: unknown[];
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
            created_by: number | null;
            updated_by: number | null;
            deleted_by: number | null;
        };
        /** CustomContentFieldDataPatchRequest */
        CustomContentFieldDataPatchRequest: {
            dataArr: {
                custom_content_field_id: number;
                data: string;
            }[];
        };
        /** CustomContentFieldDataPostRequest */
        CustomContentFieldDataPostRequest: {
            dataArr: {
                custom_content_field_id: number;
                data: string;
            }[];
        };
        /** CustomContentFieldDataResource */
        CustomContentFieldDataResource: {
            id: number;
            field_id: number;
            field_name?: string;
            uuid: string;
            data: unknown[];
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
            data?: string | null;
            sort_position: number;
            is_conditional?: boolean | null;
            is_repeatable?: boolean | null;
            is_hidden?: boolean | null;
            is_required?: boolean | null;
            show_in_grid?: boolean | null;
            legal_text?: string | null;
            ui_options?: string[] | null;
            placeholder?: string | null;
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
            data?: string | null;
            sort_position: number;
            is_conditional?: boolean | null;
            is_repeatable?: boolean | null;
            is_hidden?: boolean | null;
            is_required?: boolean | null;
            show_in_grid?: boolean | null;
            legal_text?: string | null;
            ui_options?: string[] | null;
            placeholder?: string | null;
        };
        /** CustomContentFieldResource */
        CustomContentFieldResource: {
            id: number;
            name: string;
            label: string | null;
            default_value: boolean | string | null;
            type: string;
            custom_content_type_id: number | null;
            data: string | null;
            sort_position: number;
            is_repeatable: boolean;
            is_required: boolean;
            is_hidden: boolean;
            options: string;
            ui_options: string;
            integrations: string;
            show_in_grid: boolean;
            legal_text: string | null;
            conditionals: components["schemas"]["CustomContentFieldConditionalResource"][];
            child_fields: components["schemas"]["CustomContentFieldResource"][];
            field_content_data: components["schemas"]["CustomContentFieldDataResource"][];
            placeholder: string | null;
        };
        /** CustomContentTypeAttachPostRequest */
        CustomContentTypeAttachPostRequest: {
            child_type_id: number;
        };
        /** CustomContentTypeCollection */
        CustomContentTypeCollection: string[];
        /** CustomContentTypePatchRequest */
        CustomContentTypePatchRequest: {
            name: string;
            client_id: number;
            type: string;
            is_searchable?: boolean | null;
            is_sortable?: boolean | null;
            slug?: string | null;
            integrations?: string[] | null;
        };
        /** CustomContentTypePostRequest */
        CustomContentTypePostRequest: {
            name: string;
            client_id: number;
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
            slug: string | null;
            client: components["schemas"]["ClientResource"];
            client_id: number;
            type: string;
            is_searchable: boolean;
            is_sortable: boolean;
            child_types: components["schemas"]["CustomContentTypeResource"][];
            fields: components["schemas"]["CustomContentFieldResource"][];
            integrations: Record<string, never> | unknown[];
        };
        /** DashboardAnnouncementPostRequest */
        DashboardAnnouncementPostRequest: {
            title: string;
            body?: string | null;
            /** @enum {string} */
            type: "info" | "warning" | "error";
            /** @enum {string} */
            audience: "self" | "users" | "client";
            client_id?: number | null;
            linkable_type?: string | null;
            linkable_id?: number | null;
            /** Format: date-time */
            starts_at?: string | null;
            /** Format: date-time */
            expires_at?: string | null;
            is_active?: boolean;
            target_user_ids?: number[] | null;
        };
        /** DashboardAnnouncementPutRequest */
        DashboardAnnouncementPutRequest: {
            title: string;
            body?: string | null;
            /** @enum {string} */
            type: "info" | "warning" | "error";
            /** @enum {string} */
            audience: "self" | "users" | "client";
            client_id?: number | null;
            linkable_type?: string | null;
            linkable_id?: number | null;
            /** Format: date-time */
            starts_at?: string | null;
            /** Format: date-time */
            expires_at?: string | null;
            is_active?: boolean;
            target_user_ids?: number[] | null;
        };
        /** DashboardAnnouncementResource */
        DashboardAnnouncementResource: {
            id: number;
            title: string;
            body: string | null;
            type: string;
            audience: string;
            target_user_ids: unknown[] | null;
            linkable_type: string | null;
            linkable_id: number | null;
            linkable_name: unknown;
            linkable_url: string;
            is_active: boolean;
            starts_at: string;
            expires_at: string;
            created_by: number | null;
            created_by_name: unknown;
            created_at: string;
            updated_at: string;
        };
        /** DomainCollection */
        DomainCollection: string[];
        /** DomainPatchRequest */
        DomainPatchRequest: {
            client_id: number;
            is_active: boolean;
            name: string;
            protocol: string;
            host: string;
            port: number;
            path: string;
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
        };
        /** DomainResource */
        DomainResource: {
            id: number;
            client: components["schemas"]["ClientResource"];
            client_id: number;
            is_active: boolean;
            name: string;
            protocol: string;
            host: string;
            port: number;
            path: string;
        };
        /** EmailTemplate */
        EmailTemplate: {
            id: number;
            client_id: number;
            language_id: number | null;
            name: string;
            slug: string | null;
            subject: string;
            body_text: string | null;
            body_html: string | null;
            default_sender_name: string | null;
            default_sender_email: string | null;
            default_recipient_name: string | null;
            default_recipient_email: string | null;
            default_cc_email: string | null;
            default_bcc_email: string | null;
            default_replyto_name: string | null;
            default_replyto_email: string | null;
            created_by: number | null;
            updated_by: number | null;
            deleted_by: number | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
            has_body_html: number;
        };
        /** EmailTemplateCollection */
        EmailTemplateCollection: string[];
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
            client: components["schemas"]["ClientResource"];
            client_id: number;
            language: components["schemas"]["LanguageResource"];
            language_id: number;
            name: string;
            slug: string | null;
            subject: string;
            body_text: string | null;
            body_html: string | null;
            has_body_html: boolean;
            default_sender_name: string | null;
            default_sender_email: string | null;
            default_recipient_name: string | null;
            default_recipient_email: string | null;
            default_cc_email: string | null;
            default_bcc_email: string | null;
            default_replyto_email: string | null;
            default_replyto_name: string | null;
            created_at: string;
            updated_at: string;
        };
        /** EmailTemplateSendPostRequest */
        EmailTemplateSendPostRequest: {
            client_id: number;
            language_id: number;
            slug: string;
            subject?: string | null;
            body_text?: string | null;
            body_html?: string | null;
            sender_name?: string | null;
            /** Format: email */
            sender_email?: string | null;
            recipient_name?: string | null;
            /** Format: email */
            recipient_email?: string | null;
            cc_email?: string | null;
            bcc_email?: string | null;
            replyto_email?: string | null;
            replyto_name?: string | null;
            text_replace_data?: string[] | null;
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
        /** FileCollection */
        FileCollection: string[];
        /** FilePatchRequest */
        FilePatchRequest: {
            client_id?: number | null;
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
            client_id?: number | null;
            description: string;
            author: string;
            source: string;
            alt_text: string;
            is_global?: string | null;
            is_excluded_from_search_index?: boolean | null;
            file?: string | null;
            tags?: string[] | null;
            categories: number[];
            files: {
                dataUrl: string;
                name?: string | null;
            }[];
        };
        /** FileResource */
        FileResource: {
            id: number;
            client_id: number | null;
            client?: components["schemas"]["ClientResource"];
            description: string;
            author: string;
            source: string;
            is_global: number;
            alt_text: string;
            file: components["schemas"]["MediaResource"] | null;
            categories: components["schemas"]["CategoryResource"][] | null;
            exists: string | boolean;
            /** @description always true for s3 */
            is_excluded_from_search_index: boolean;
            tags: string;
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
        /** FormConfigResource */
        FormConfigResource: {
            save_in_database: number;
            send_email_to_user: number;
            target_email: string | null | "";
            target_email_template_id: number | null;
            user_email_template_id: number | null;
        };
        /** GridActionRequest */
        GridActionRequest: {
            action: string;
            data: string[];
            all: boolean;
        };
        /** LanguageCollection */
        LanguageCollection: string[];
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
            created_at: string;
            conversions: string;
        };
        /** Motor.Admin.Http.Requests.Api.AISystemPromptPatchRequest */
        "Motor.Admin.Http.Requests.Api.AISystemPromptPatchRequest": {
            client_id?: number | null;
            name: string;
            prompt: string;
        };
        /** Motor.Admin.Http.Requests.Api.AISystemPromptPostRequest */
        "Motor.Admin.Http.Requests.Api.AISystemPromptPostRequest": {
            client_id?: number | null;
            name: string;
            prompt: string;
        };
        /** Motor.Admin.Http.Requests.Api.ConfigVariablePatchRequest */
        "Motor.Admin.Http.Requests.Api.ConfigVariablePatchRequest": {
            package: string;
            group: string;
            name: string;
            value: string;
            is_invisible?: boolean | null;
        };
        /** Motor.Admin.Http.Requests.Api.ConfigVariablePostRequest */
        "Motor.Admin.Http.Requests.Api.ConfigVariablePostRequest": {
            package: string;
            group: string;
            name: string;
            value: string;
            is_invisible?: boolean | null;
        };
        /** Motor.Admin.Http.Requests.Api.EmailTemplatePatchRequest */
        "Motor.Admin.Http.Requests.Api.EmailTemplatePatchRequest": {
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
        /** Motor.Admin.Http.Requests.Api.EmailTemplatePostRequest */
        "Motor.Admin.Http.Requests.Api.EmailTemplatePostRequest": {
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
        /** Motor.Admin.Http.Requests.Api.PermissionGroupPatchRequest */
        "Motor.Admin.Http.Requests.Api.PermissionGroupPatchRequest": {
            name: string;
            sort_position?: number | null;
            permissions?: number[] | null;
        };
        /** Motor.Admin.Http.Requests.Api.PermissionGroupPostRequest */
        "Motor.Admin.Http.Requests.Api.PermissionGroupPostRequest": {
            name: string;
            sort_position?: number | null;
            permissions?: number[] | null;
        };
        /** Motor.Admin.Http.Requests.Api.V2.CategoryPatchRequest */
        "Motor.Admin.Http.Requests.Api.V2.CategoryPatchRequest": {
            name: string;
            parent_id: number;
            previous_sibling_id?: string | null;
            next_sibling_id?: string | null;
        };
        /** Motor.Admin.Http.Requests.Api.V2.CategoryPostRequest */
        "Motor.Admin.Http.Requests.Api.V2.CategoryPostRequest": {
            name: string;
            parent_id: number;
            previous_sibling_id?: string | null;
            next_sibling_id?: string | null;
        };
        /** Motor.Admin.Http.Requests.Api.V2.ClientPatchRequest */
        "Motor.Admin.Http.Requests.Api.V2.ClientPatchRequest": {
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
        /** Motor.Admin.Http.Requests.Api.V2.ClientPostRequest */
        "Motor.Admin.Http.Requests.Api.V2.ClientPostRequest": {
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
        /** Motor.Admin.Http.Requests.Api.V2.DomainPatchRequest */
        "Motor.Admin.Http.Requests.Api.V2.DomainPatchRequest": {
            client_id: number;
            is_active: boolean;
            name: string;
            protocol: string;
            host: string;
            port: number;
            path: string;
        };
        /** Motor.Admin.Http.Requests.Api.V2.DomainPostRequest */
        "Motor.Admin.Http.Requests.Api.V2.DomainPostRequest": {
            client_id: number;
            is_active: boolean;
            name: string;
            protocol: string;
            host: string;
            port: number;
            path: string;
        };
        /** Motor.Admin.Http.Requests.Api.V2.LanguagePatchRequest */
        "Motor.Admin.Http.Requests.Api.V2.LanguagePatchRequest": {
            iso_639_1: string;
            english_name: string;
            native_name: string;
        };
        /** Motor.Admin.Http.Requests.Api.V2.LanguagePostRequest */
        "Motor.Admin.Http.Requests.Api.V2.LanguagePostRequest": {
            iso_639_1: string;
            english_name: string;
            native_name: string;
        };
        /** Motor.Admin.Http.Requests.Api.V2.PermissionPatchRequest */
        "Motor.Admin.Http.Requests.Api.V2.PermissionPatchRequest": {
            name: string;
            guard_name: string;
            permission_group_id?: number | null;
        };
        /** Motor.Admin.Http.Requests.Api.V2.PermissionPostRequest */
        "Motor.Admin.Http.Requests.Api.V2.PermissionPostRequest": {
            name: string;
            guard_name: string;
            permission_group_id?: number | null;
        };
        /** Motor.Admin.Http.Requests.Api.V2.RolePatchRequest */
        "Motor.Admin.Http.Requests.Api.V2.RolePatchRequest": {
            name: string;
            guard_name: string;
            permissions?: number[] | null;
        };
        /** Motor.Admin.Http.Requests.Api.V2.RolePostRequest */
        "Motor.Admin.Http.Requests.Api.V2.RolePostRequest": {
            name: string;
            guard_name: string;
            permissions?: number[] | null;
        };
        /** Motor.Admin.Http.Requests.Api.V2.UserPatchRequest */
        "Motor.Admin.Http.Requests.Api.V2.UserPatchRequest": {
            name: string;
            /** Format: email */
            email: string;
            password?: string | null;
            clients?: number[] | null;
            roles?: number[] | null;
            permissions?: number[] | null;
            avatar?: {
                dataUrl?: string | null;
                name?: string | null;
            } | null;
        };
        /** Motor.Admin.Http.Requests.Api.V2.UserPostRequest */
        "Motor.Admin.Http.Requests.Api.V2.UserPostRequest": {
            name: string;
            /** Format: email */
            email: string;
            password: string;
            clients?: number[] | null;
            roles?: number[] | null;
            permissions?: number[] | null;
            avatar?: {
                dataUrl?: string | null;
                name?: string | null;
            } | null;
        };
        /** Motor.Admin.Http.Resources.Frontend.DomainCollection */
        "Motor.Admin.Http.Resources.Frontend.DomainCollection": string[];
        /** Motor.Admin.Http.Resources.V2.AISystemPromptResource */
        "Motor.Admin.Http.Resources.V2.AISystemPromptResource": {
            id: number;
            name: string;
            prompt: string;
            client?: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            client_id: number;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.CategoryCollection */
        "Motor.Admin.Http.Resources.V2.CategoryCollection": components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"][];
        /** Motor.Admin.Http.Resources.V2.CategoryResource */
        "Motor.Admin.Http.Resources.V2.CategoryResource": {
            id: number;
            name: string;
            scope: string;
            parent_id: number | null;
            _lft: number;
            _rgt: number;
            level: number;
            /** @description Only include children when explicitly loaded - breaks Scramble recursion */
            children?: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"][];
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.ClientResource */
        "Motor.Admin.Http.Resources.V2.ClientResource": {
            id: number;
            name: string;
            slug: string;
            address: string;
            zip: string;
            city: string;
            country_iso_3166_1: string;
            website: string;
            description: string | null;
            is_active: boolean;
            contact_name: string;
            contact_phone: string;
            contact_email: string;
            frontend_config: string | null;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.ConfigVariableResource */
        "Motor.Admin.Http.Resources.V2.ConfigVariableResource": {
            id: number;
            package: string;
            group: string;
            name: string;
            value: string;
            is_invisible: boolean;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.DomainResource */
        "Motor.Admin.Http.Resources.V2.DomainResource": {
            id: number;
            name: string;
            client?: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            client_id: number;
            is_active: boolean;
            protocol: string;
            host: string;
            port: number;
            path: string;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.EmailTemplateResource */
        "Motor.Admin.Http.Resources.V2.EmailTemplateResource": {
            id: number;
            name: string;
            slug: string | null;
            client?: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            client_id: number;
            language?: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"];
            language_id: number;
            subject: string;
            body_text: string | null;
            body_html: string | null;
            has_body_html: boolean;
            default_sender_name: string | null;
            default_sender_email: string | null;
            default_recipient_name: string | null;
            default_recipient_email: string | null;
            default_cc_email: string | null;
            default_bcc_email: string | null;
            default_replyto_email: string | null;
            default_replyto_name: string | null;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.LanguageResource */
        "Motor.Admin.Http.Resources.V2.LanguageResource": {
            id: number;
            iso_639_1: string;
            english_name: string;
            native_name: string;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.MediaResource */
        "Motor.Admin.Http.Resources.V2.MediaResource": {
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
            created_at: string;
            conversions: string;
        };
        /** Motor.Admin.Http.Resources.V2.PermissionGroupResource */
        "Motor.Admin.Http.Resources.V2.PermissionGroupResource": {
            id: number;
            name: string;
            sort_position: number | null;
            permission_names?: unknown[];
            permissions?: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionResource"][];
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.PermissionResource */
        "Motor.Admin.Http.Resources.V2.PermissionResource": {
            id: number;
            name: string;
            guard_name: string;
            permission_group?: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionGroupResource"];
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.RoleResource */
        "Motor.Admin.Http.Resources.V2.RoleResource": {
            id: number;
            name: string;
            guard_name: string;
            permissions?: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionResource"][];
            created_at: string;
            updated_at: string;
        };
        /** Motor.Admin.Http.Resources.V2.UserResource */
        "Motor.Admin.Http.Resources.V2.UserResource": {
            id: number;
            name: string;
            email: string;
            avatar: components["schemas"]["Motor.Admin.Http.Resources.V2.MediaResource"];
            clients?: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"][];
            roles?: components["schemas"]["Motor.Admin.Http.Resources.V2.RoleResource"][];
            permissions?: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionResource"][];
            created_at: string;
            updated_at: string;
        };
        /** Motor.Assistant.Http.Requests.Api.V2.ClickpathPatchRequest */
        "Motor.Assistant.Http.Requests.Api.V2.ClickpathPatchRequest": {
            name: string;
            client_id: number;
            duration: number;
        };
        /** Motor.Assistant.Http.Requests.Api.V2.ClickpathPostRequest */
        "Motor.Assistant.Http.Requests.Api.V2.ClickpathPostRequest": {
            name: string;
            client_id: number;
            duration: number;
        };
        /** Motor.Assistant.Http.Requests.Api.V2.StepPatchRequest */
        "Motor.Assistant.Http.Requests.Api.V2.StepPatchRequest": {
            name: string;
            type: string;
            trigger_content: string;
            main_content: string;
            client_id: number;
            trigger_content_headline?: string | null;
            layer_order_index?: number | null;
            clickpath_id?: number | null;
            parent_id?: number | null;
            parent_step_id?: number | null;
        };
        /** Motor.Assistant.Http.Requests.Api.V2.StepPostRequest */
        "Motor.Assistant.Http.Requests.Api.V2.StepPostRequest": {
            name: string;
            type: string;
            trigger_content: string;
            main_content: string;
            client_id: number;
            trigger_content_headline?: string | null;
            layer_order_index?: number | null;
            clickpath_id: number;
            parent_id?: number | null;
            parent_step_id?: number | null;
        };
        /** Motor.Assistant.Http.Resources.Frontend.ClickpathCollection */
        "Motor.Assistant.Http.Resources.Frontend.ClickpathCollection": string[];
        /** Motor.Assistant.Http.Resources.Frontend.ClickpathResource */
        "Motor.Assistant.Http.Resources.Frontend.ClickpathResource": {
            id: number;
            name: string;
            duration: number;
            client_id: number;
            steps: components["schemas"]["Motor.Assistant.Http.Resources.Frontend.StepResource"][] | null;
        };
        /** Motor.Assistant.Http.Resources.Frontend.StepResource */
        "Motor.Assistant.Http.Resources.Frontend.StepResource": {
            id: number;
            name: string;
            type: string;
            trigger_content: string;
            trigger_content_headline: string | null;
            layer_order_index: number | null;
            main_content: string;
            client_id: number;
            parent_step_id: string | 0;
            parent_id: string | 0;
        };
        /** Motor.Assistant.Http.Resources.V2.ClickpathResource */
        "Motor.Assistant.Http.Resources.V2.ClickpathResource": {
            id: number;
            name: string;
            duration: number;
            client_id: number;
            client: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
        };
        /** Motor.Assistant.Http.Resources.V2.StepResource */
        "Motor.Assistant.Http.Resources.V2.StepResource": {
            id: number;
            name: string;
            type: string;
            trigger_content: string;
            trigger_content_headline: string | null;
            layer_order_index: number | null;
            main_content: string;
            client_id: number;
        };
        /** Motor.Builder.Http.Requests.Api.BuilderTemporaryPagePostRequest */
        "Motor.Builder.Http.Requests.Api.BuilderTemporaryPagePostRequest": {
            page_definition: string;
            global_css?: string | null;
            uuid: string;
        };
        /** Motor.Builder.Http.Requests.Api.V2.ApprovalPostRequest */
        "Motor.Builder.Http.Requests.Api.V2.ApprovalPostRequest": {
            is_approved: boolean;
            is_rejected: boolean;
            comment?: string | null;
        };
        /** Motor.Builder.Http.Requests.Api.V2.BuilderCustomComponentPatchRequest */
        "Motor.Builder.Http.Requests.Api.V2.BuilderCustomComponentPatchRequest": {
            name: string;
            client_id: number;
            language_id: number;
            tags?: string[] | null;
            categories?: number[] | null;
        };
        /** Motor.Builder.Http.Requests.Api.V2.BuilderCustomComponentPostRequest */
        "Motor.Builder.Http.Requests.Api.V2.BuilderCustomComponentPostRequest": {
            name: string;
            client_id: number;
            language_id: number;
            tags?: string[] | null;
            categories?: number[] | null;
        };
        /** Motor.Builder.Http.Requests.Api.V2.BuilderPageDefinitionPostRequest */
        "Motor.Builder.Http.Requests.Api.V2.BuilderPageDefinitionPostRequest": {
            id: number;
            page_definition: string;
        };
        /** Motor.Builder.Http.Requests.Api.V2.BuilderPagePatchRequest */
        "Motor.Builder.Http.Requests.Api.V2.BuilderPagePatchRequest": {
            name: string;
            ttl: number;
            client_id: number;
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
        /** Motor.Builder.Http.Requests.Api.V2.BuilderPagePostRequest */
        "Motor.Builder.Http.Requests.Api.V2.BuilderPagePostRequest": {
            name: string;
            ttl: number;
            client_id: number;
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
        /** Motor.Builder.Http.Requests.Api.V2.BuilderPageSetPublishedStatusRequest */
        "Motor.Builder.Http.Requests.Api.V2.BuilderPageSetPublishedStatusRequest": {
            is_published?: boolean;
            /** Format: date-time */
            to_be_published_at?: string | null;
            take_offline?: boolean | null;
        };
        /** Motor.Builder.Http.Requests.Api.V2.BuilderPageSetRevisionRequest */
        "Motor.Builder.Http.Requests.Api.V2.BuilderPageSetRevisionRequest": {
            revision_id: number;
        };
        /** Motor.Builder.Http.Requests.Api.V2.GridActionRequest */
        "Motor.Builder.Http.Requests.Api.V2.GridActionRequest": {
            action: string;
            data: string[];
            all: boolean;
        };
        /** Motor.Builder.Http.Requests.Api.V2.SearchConfigPatchRequest */
        "Motor.Builder.Http.Requests.Api.V2.SearchConfigPatchRequest": {
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
        };
        /** Motor.Builder.Http.Requests.Api.V2.SearchConfigPostRequest */
        "Motor.Builder.Http.Requests.Api.V2.SearchConfigPostRequest": {
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
        };
        /** Motor.Builder.Http.Requests.Api.V2.SeoRedirectPatchRequest */
        "Motor.Builder.Http.Requests.Api.V2.SeoRedirectPatchRequest": {
            request_url: string;
            target_url: string;
            http_status_code?: number | null;
            type?: string | null;
            domain_id: number;
        };
        /** Motor.Builder.Http.Requests.Api.V2.SeoRedirectPostRequest */
        "Motor.Builder.Http.Requests.Api.V2.SeoRedirectPostRequest": {
            request_url: string;
            target_url: string;
            http_status_code?: number | null;
            type?: string | null;
            domain_id: number;
        };
        /** Motor.Builder.Http.Requests.Api.V2.SeoValuePatchRequest */
        "Motor.Builder.Http.Requests.Api.V2.SeoValuePatchRequest": {
            seoable_id: number;
            seoable_type: string;
            key: string;
            value: string;
            attribute_type: string;
            content?: string | null;
        };
        /** Motor.Builder.Http.Requests.Api.V2.SeoValuePostRequest */
        "Motor.Builder.Http.Requests.Api.V2.SeoValuePostRequest": {
            seoable_id: number;
            seoable_type: string;
            key: string;
            value: string;
            attribute_type: string;
            content?: string | null;
        };
        /** Motor.Builder.Http.Resources.Frontend.BuilderPageResource */
        "Motor.Builder.Http.Resources.Frontend.BuilderPageResource": {
            id: number;
            uuid: string;
            cache_type: string;
            name: string;
            page_definition: Record<string, never> | null;
            is_excluded_from_search_index: boolean;
            is_excluded_from_cookie_banner: boolean;
            global_css: string;
            client: components["schemas"]["ClientResource"];
            client_id: number;
            language_id: number;
            language: components["schemas"]["LanguageResource"];
            seo_values: components["schemas"]["SeoValueResource"][] | string[];
            domain_seo_values: components["schemas"]["SeoValueResource"][] | string[];
        };
        /** Motor.Builder.Http.Resources.Frontend.NavigationResource */
        "Motor.Builder.Http.Resources.Frontend.NavigationResource": {
            id: number;
            name: string;
            scope: string;
            slug: string;
            full_slug: string;
            notification: null | components["schemas"]["Motor.Builder.Http.Resources.Frontend.NotificationResource"];
            is_visible: boolean;
            is_active: boolean;
            hide_slug_from_url: boolean;
            link_type: string;
            link_target: string;
            link_url: string | null;
            click_event: string | null;
            builder_page_uuid: string | null;
            /**
             * @description 'builder_page_id'    => $this->link_type === 'navigation' ? $this->navigation_item?->latest_page?->id : $this->latest_page?->id,
             *     'clickpath'          => new ClickpathResource($this->getClickPath()),
             */
            clickpath_id: null | string | number;
            client_id: number;
            language_id: number | null;
            /**
             * @description 'client'             => new ClientResource($this->client),
             *     'language'           => new LanguageResource($this->language),
             */
            parent_id: number;
            _lft: number;
            _rgt: number;
            /**
             * @description 'level'              => (int) $this->ancestors()
             *     ->count(),
             *     Ober ebene muss auch noch sortiert werden
             */
            children: components["schemas"]["Motor.Builder.Http.Resources.Frontend.NavigationResource"][];
            css_classes: unknown[] | null;
            scores: components["schemas"]["Score"][];
        };
        /** Motor.Builder.Http.Resources.Frontend.NotificationResource */
        "Motor.Builder.Http.Resources.Frontend.NotificationResource": {
            id: number;
            headline: string;
            text: string;
            variante: string;
            link: string;
            button_text: string;
            can_be_hidden: boolean;
            is_active: boolean;
            navigation_id: number | null;
            media_attributes: {
                src: string;
                alt: string;
            };
            has_media: string;
        };
        /** Motor.Builder.Http.Resources.Frontend.SeoRedirectCollection */
        "Motor.Builder.Http.Resources.Frontend.SeoRedirectCollection": string[];
        /** Motor.Builder.Http.Resources.V2.ApprovalCollection */
        "Motor.Builder.Http.Resources.V2.ApprovalCollection": components["schemas"]["Motor.Builder.Http.Resources.V2.ApprovalResource"][];
        /** Motor.Builder.Http.Resources.V2.ApprovalResource */
        "Motor.Builder.Http.Resources.V2.ApprovalResource": {
            id: number;
            is_approved: boolean;
            is_rejected: boolean;
            to_be_published_at: string;
            comment: string | null;
            approved_by_client_id: number;
            client: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            approved_at: string;
        };
        /** Motor.Builder.Http.Resources.V2.BuilderPageResource */
        "Motor.Builder.Http.Resources.V2.BuilderPageResource": {
            id: number;
            name: string;
            type: string;
            ttl: number;
            cache_type: string;
            page_definition?: Record<string, never> | null;
            uuid: string;
            is_current: boolean;
            is_published: boolean;
            /** Format: date-time */
            published_at: string | null;
            has_published_revision: string;
            is_excluded_from_cookie_banner: boolean;
            is_excluded_from_search_index: boolean;
            is_excluded_from_search: boolean;
            admin_scss: string;
            client: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            client_id: number;
            language: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"];
            language_id: number | null;
            tags: string;
            created_at: string;
            updated_at: string;
            publishing_time: components["schemas"]["PublishingTimeSummaryResource"][];
            seo_tags: components["schemas"]["Motor.Builder.Http.Resources.V2.SeoValueResource"][];
            global_css: string;
            global_scss: string;
            navigations?: components["schemas"]["NavigationSummaryResource"][];
            has_active_navigation: boolean;
            categories: components["schemas"]["CategorySummaryResource"][];
        };
        /** Motor.Builder.Http.Resources.V2.NavigationReducedResource */
        "Motor.Builder.Http.Resources.V2.NavigationReducedResource": {
            id: number;
            name: string;
            slug: string;
            full_slug: string;
            is_active: boolean;
            root_node: string;
            _lft: number;
            _rgt: number;
            children?: components["schemas"]["Motor.Builder.Http.Resources.V2.NavigationReducedResource"][];
            root_node_name: string | null;
        };
        /** Motor.Builder.Http.Resources.V2.NavigationTreeResource */
        "Motor.Builder.Http.Resources.V2.NavigationTreeResource": {
            id: number;
            name: string;
            scope: string;
            client: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            client_id: number;
            language: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"];
            language_id: number | null;
            children?: components["schemas"]["Motor.Builder.Http.Resources.V2.NavigationReducedResource"][] | components["schemas"]["NavigationItemResource"][] | null;
            parent: number | null;
        };
        /** Motor.Builder.Http.Resources.V2.NotificationResource */
        "Motor.Builder.Http.Resources.V2.NotificationResource": {
            id: number;
            headline: string;
            text: string;
            variante: string;
            link: string;
            button_text: string;
            can_be_hidden: boolean;
            is_active: boolean;
            navigation_id: number | null;
            media_attributes: Record<string, never> | null;
            has_media: string;
        };
        /** Motor.Builder.Http.Resources.V2.PublishingTimeCollection */
        "Motor.Builder.Http.Resources.V2.PublishingTimeCollection": components["schemas"]["Motor.Builder.Http.Resources.V2.PublishingTimeResource"][];
        /** Motor.Builder.Http.Resources.V2.PublishingTimeResource */
        "Motor.Builder.Http.Resources.V2.PublishingTimeResource": {
            id: number;
            publishable_id: number;
            to_be_published_at: string;
            name: string;
            client_id: number;
            language_id: number;
            client_name: string;
            language_native_name: string;
            is_published: boolean;
            uuid: string;
            /** Format: date-time */
            created_at: string | null;
            navigations: components["schemas"]["NavigationItemResource"][] | string[];
        };
        /** Motor.Builder.Http.Resources.V2.SearchConfigResource */
        "Motor.Builder.Http.Resources.V2.SearchConfigResource": {
            id: number;
            domain_id: number | null;
            domain: components["schemas"]["Motor.Admin.Http.Resources.V2.DomainResource"];
            is_active: boolean;
            url: string;
            url_label: string;
            links: unknown[];
            overline: string | null;
            headline: string;
            teaser: string;
            image_crop: unknown[] | null;
            file_id: number | null;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Builder.Http.Resources.V2.SeoRedirectResource */
        "Motor.Builder.Http.Resources.V2.SeoRedirectResource": {
            id: number;
            request_url: string;
            target_url: string;
            http_status_code: number | null;
            type: string;
            client_id: string;
            domain_id: number | null;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Builder.Http.Resources.V2.SeoValueResource */
        "Motor.Builder.Http.Resources.V2.SeoValueResource": {
            id: number;
            attribute_type: string | null;
            key: string;
            value: string;
            content: string | null;
            seoable_id: string;
            seoable_type: string;
            created_at: string;
            updated_at: string;
        };
        /**
         * Motor.ContentType.Http.Requests.Api.Frontend.CustomContentFieldDataPostRequest
         * @description Class FrontendCustomContentFieldDataPostRequest
         *
         *       *       {
         *      *           custom_content_field_id: 55391127175731,
         *      *           data: 'email: test@zeitraum.com'
         *      *       },
         *      *       {
         *      *           custom_content_field_id: 55391127175731,
         *      *           data: 'tel: 1234567890'
         *      *       }]", @OA\Items(type="object", example="{
         *      *            custom_content_field_id: 55391127175731,
         *      *            data: 'tel: 1234567890'
         *      *        }")))
         *
         *      )
         *       required={"dataArr", "client_id"},
         *     )
         */
        "Motor.ContentType.Http.Requests.Api.Frontend.CustomContentFieldDataPostRequest": {
            defaultFormFields?: string[] | null;
            entityID: number;
            dataArr: {
                custom_content_field_id: number;
                data: string;
            }[];
        };
        /** Motor.ContentType.Http.Requests.Api.V2.CustomContentFieldPatchRequest */
        "Motor.ContentType.Http.Requests.Api.V2.CustomContentFieldPatchRequest": {
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
        /** Motor.ContentType.Http.Requests.Api.V2.CustomContentFieldPostRequest */
        "Motor.ContentType.Http.Requests.Api.V2.CustomContentFieldPostRequest": {
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
        /** Motor.ContentType.Http.Requests.Api.V2.CustomContentTypePatchRequest */
        "Motor.ContentType.Http.Requests.Api.V2.CustomContentTypePatchRequest": {
            name: string;
            client_id: number;
            type: string;
            is_searchable?: boolean | null;
            is_sortable?: boolean | null;
            slug?: string | null;
            integrations?: string[] | null;
        };
        /** Motor.ContentType.Http.Requests.Api.V2.CustomContentTypePostRequest */
        "Motor.ContentType.Http.Requests.Api.V2.CustomContentTypePostRequest": {
            name: string;
            client_id: number;
            type: string;
            is_searchable?: boolean | null;
            is_sortable?: boolean | null;
            slug?: string | null;
            integrations?: string[] | null;
        };
        /** Motor.ContentType.Http.Resources.Frontend.CustomContentFieldConditionalResource */
        "Motor.ContentType.Http.Resources.Frontend.CustomContentFieldConditionalResource": {
            id: number;
            field_id: number;
            conditional: string;
            value: string;
        };
        /** Motor.ContentType.Http.Resources.Frontend.CustomContentFieldResource */
        "Motor.ContentType.Http.Resources.Frontend.CustomContentFieldResource": {
            id: number;
            name: string;
            label: string | null;
            default_value: string | null;
            type: string;
            options: string;
            ui_options: string;
            /** @description 'custom_content_type_id' => $this->custom_content_type_id, */
            data: string | null;
            legal_text: string | null;
            is_hidden: number | null;
            sort_position: number;
            /** @description 'is_repeatable' => $this->is_repeatable, */
            is_required: number;
            placeholder: string | null;
            conditionals: components["schemas"]["Motor.ContentType.Http.Resources.Frontend.CustomContentFieldConditionalResource"][];
            child_fields: components["schemas"]["Motor.ContentType.Http.Resources.Frontend.CustomContentFieldResource"][];
        };
        /** Motor.ContentType.Http.Resources.Frontend.CustomContentTypeResource */
        "Motor.ContentType.Http.Resources.Frontend.CustomContentTypeResource": {
            id: number;
            name: string;
            type: string;
            fields: components["schemas"]["Motor.ContentType.Http.Resources.Frontend.CustomContentFieldResource"][];
            integrations: unknown[];
        };
        /** Motor.ContentType.Http.Resources.V2.CustomContentFieldResource */
        "Motor.ContentType.Http.Resources.V2.CustomContentFieldResource": {
            id: number;
            name: string;
            label: string | null;
            default_value: boolean | string | null;
            type: string;
            custom_content_type_id: number | null;
            field_data: string | null;
            sort_position: number;
            is_repeatable: boolean;
            is_required: boolean;
            is_hidden: boolean;
            options: string;
            ui_options: string;
            show_in_grid: boolean;
            legal_text: string | null;
            placeholder: string | null;
        };
        /** Motor.ContentType.Http.Resources.V2.CustomContentTypeResource */
        "Motor.ContentType.Http.Resources.V2.CustomContentTypeResource": {
            id: number;
            name: string;
            slug: string | null;
            client_id: number;
            client: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            type: string;
            is_searchable: boolean;
            is_sortable: boolean;
            integrations: Record<string, never> | unknown[];
            fields?: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentFieldResource"][];
        };
        /** Motor.Media.Http.Requests.Api.V2.FilePatchRequest */
        "Motor.Media.Http.Requests.Api.V2.FilePatchRequest": {
            client_id?: number | null;
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
        /** Motor.Media.Http.Requests.Api.V2.FilePostRequest */
        "Motor.Media.Http.Requests.Api.V2.FilePostRequest": {
            client_id?: number | null;
            description: string;
            author: string;
            source: string;
            alt_text: string;
            is_global?: string | null;
            is_excluded_from_search_index?: boolean | null;
            file?: string | null;
            tags?: string[] | null;
            categories: number[];
            files: {
                dataUrl: string;
                name?: string | null;
            }[];
        };
        /** Motor.Media.Http.Resources.V2.FileCollection */
        "Motor.Media.Http.Resources.V2.FileCollection": components["schemas"]["Motor.Media.Http.Resources.V2.FileResource"][];
        /** Motor.Media.Http.Resources.V2.FileResource */
        "Motor.Media.Http.Resources.V2.FileResource": {
            id: number;
            client_id: number | null;
            client?: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            description: string;
            author: string;
            source: string;
            is_global: boolean;
            alt_text: string;
            file: components["schemas"]["Motor.Admin.Http.Resources.V2.MediaResource"] | null;
            categories: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"][] | null;
            exists: string | boolean;
            is_excluded_from_search_index: boolean;
            tags: string;
        };
        /** Motor.Scoring.Http.Requests.Api.TriggeredScoreSearchRequest */
        "Motor.Scoring.Http.Requests.Api.TriggeredScoreSearchRequest": {
            search: string[];
        };
        /** Motor.Scoring.Http.Requests.Api.V2.ScorePatchRequest */
        "Motor.Scoring.Http.Requests.Api.V2.ScorePatchRequest": {
            topic_id: number;
            scorable_id: number;
            scorable_type: string;
            score: number;
            trigger?: string[] | null;
        };
        /** Motor.Scoring.Http.Requests.Api.V2.ScorePostRequest */
        "Motor.Scoring.Http.Requests.Api.V2.ScorePostRequest": {
            topic_id: number;
            scorable_id: number;
            scorable_type: string;
            score: number;
            trigger?: string[] | null;
        };
        /** Motor.Scoring.Http.Requests.Api.V2.TopicPatchRequest */
        "Motor.Scoring.Http.Requests.Api.V2.TopicPatchRequest": {
            client_id: number;
            name: string;
            categories: string[];
        };
        /** Motor.Scoring.Http.Requests.Api.V2.TopicPostRequest */
        "Motor.Scoring.Http.Requests.Api.V2.TopicPostRequest": {
            client_id: number;
            name: string;
            categories: string[];
        };
        /** Motor.Scoring.Http.Resources.V2.ScoreResource */
        "Motor.Scoring.Http.Resources.V2.ScoreResource": {
            id: number;
            topic_id: number;
            scorable_id: number;
            scorable_type: string;
            score: number;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Scoring.Http.Resources.V2.TopicResource */
        "Motor.Scoring.Http.Resources.V2.TopicResource": {
            id: number;
            client_id: number;
            client?: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"] | null;
            name: string;
            categories?: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"][] | null;
            created_at: string;
            updated_at: string;
        };
        /** Motor.Scoring.Http.Resources.V2.TriggeredScoreCollection */
        "Motor.Scoring.Http.Resources.V2.TriggeredScoreCollection": components["schemas"]["TriggeredScoreResource"][];
        /** NavigationCollection */
        NavigationCollection: string[];
        /** NavigationItemResource */
        NavigationItemResource: {
            id: number;
            name: string;
            scope: string;
            slug: string;
            notification: components["schemas"]["Motor.Builder.Http.Resources.V2.NotificationResource"];
            full_slug: string;
            is_visible: boolean;
            is_active: boolean;
            hide_slug_from_url: boolean;
            link_type: string;
            link_target: string;
            link_url: string | null;
            click_event: string | null;
            builder_page?: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
            builder_page_uuid: string | null;
            builder_page_name: string | null;
            navigation_item_id: number | null;
            has_builder_page: boolean;
            has_redirection: boolean;
            has_external_url: boolean;
            assistant_clickpath_id: number | null;
            clickpath: components["schemas"]["Motor.Assistant.Http.Resources.V2.ClickpathResource"] | null;
            client: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
            language: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"];
            parent_id: number;
            _lft: number;
            _rgt: number;
            level: number;
            children?: components["schemas"]["NavigationItemResource"][];
            scorings: components["schemas"]["Motor.Scoring.Http.Resources.V2.ScoreResource"][];
            tags: string;
            css_classes: unknown[] | null;
            root_node: string;
            root_node_name: string;
            computed_link: string;
            main_navigation_item: components["schemas"]["NavigationItemResource"];
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
        };
        /** NavigationReducedResource */
        NavigationReducedResource: {
            id: number;
            name: string;
            slug: string;
            full_slug: string;
            is_active: boolean;
            root_node: string;
            _lft: number;
            _rgt: number;
            children?: components["schemas"]["NavigationReducedResource"][];
            root_node_name: string | null;
        };
        /** NavigationResource */
        NavigationResource: {
            id: number;
            name: string;
            scope: string;
            slug: string;
            notification: components["schemas"]["NotificationResource"];
            full_slug: string;
            is_visible: boolean;
            is_active: boolean;
            hide_slug_from_url: boolean;
            link_type: string;
            link_target: string;
            link_url: string | null;
            click_event: string | null;
            builder_page?: components["schemas"]["BuilderPageResource"];
            builder_page_uuid: string | null;
            builder_page_name: string | null;
            navigation_item_id: number | null;
            has_builder_page: boolean;
            has_redirection: boolean;
            has_external_url: boolean;
            assistant_clickpath_id: number | null;
            clickpath: components["schemas"]["ClickpathResource"] | null;
            client: components["schemas"]["ClientResource"];
            language: components["schemas"]["LanguageResource"];
            parent_id: number;
            _lft: number;
            _rgt: number;
            level: number;
            children?: components["schemas"]["NavigationResource"][];
            scorings: components["schemas"]["ScoreResource"][];
            tags: string;
            css_classes: unknown[] | null;
            root_node: string;
            root_node_name: string;
            computed_link: string;
            main_navigation_item: components["schemas"]["NavigationResource"];
        };
        /** NavigationSummaryResource */
        NavigationSummaryResource: {
            id: number;
            name: string;
            full_slug: string;
            is_active: boolean;
            scope: string;
            root_node: string;
            root_node_name: string;
        };
        /** NavigationTreeCollection */
        NavigationTreeCollection: components["schemas"]["NavigationTreeResource"][];
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
            parent_id: number;
            name: string;
            scope: string;
            slug: string;
            full_slug: string;
            /** @description 'client'          => new ClientResource($this->client), */
            client_id: number;
            /** @description 'language'        => new LanguageResource($this->language), */
            language_id: number | null;
            builder_page_id: string;
            children: components["schemas"]["Motor.Builder.Http.Resources.Frontend.NavigationResource"][];
        };
        /** NotificationResource */
        NotificationResource: {
            id: number;
            headline: string;
            text: string;
            variante: string;
            link: string;
            button_text: string;
            can_be_hidden: boolean;
            is_active: boolean;
            navigation_id: number | null;
            media_attributes: Record<string, never> | null;
            has_media: string;
        };
        /** PermissionCollection */
        PermissionCollection: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionResource"][];
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
            sort_position: number;
            permissions?: components["schemas"]["PermissionResource"][];
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
        };
        /** ProfileEditRequest */
        ProfileEditRequest: {
            name: string;
            /** Format: email */
            email: string;
            password?: string | null;
            avatar?: string | null;
        };
        /** PublishingTimeCollection */
        PublishingTimeCollection: string[];
        /** PublishingTimeResource */
        PublishingTimeResource: {
            id: number;
            publishable_id: number;
            to_be_published_at: string;
            name: string;
            client_id: number;
            language_id: number;
            client_name: string;
            language_native_name: string;
            is_published: boolean;
            uuid: string;
            created_at: string;
            navigations: components["schemas"]["NavigationResource"][] | string[];
        };
        /** PublishingTimeSummaryResource */
        PublishingTimeSummaryResource: {
            id: number;
            publishable_id: number;
            to_be_published_at: string;
            name: string;
            client_id: number;
            language_id: number;
            is_published: boolean;
            uuid: string;
            created_at: string;
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
        };
        /** Score */
        Score: {
            id: number;
            topic_id: number;
            score: number;
            scorable_id: number;
            scorable_type: string;
            trigger: unknown[] | null;
            created_by: number | null;
            updated_by: number | null;
            deleted_by: number | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** ScoreCollection */
        ScoreCollection: string[];
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
            score: number;
            trigger?: components["schemas"]["BaseResource"];
        };
        /** ScoreTriggerRequest */
        ScoreTriggerRequest: {
            score_id: number;
        };
        /** SearchConfigCollection */
        SearchConfigCollection: string[];
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
        };
        /** SearchConfigResource */
        SearchConfigResource: {
            id: number;
            domain_id: number;
            domain: components["schemas"]["DomainResource"];
            /**
             * @description 'client_id'     => (int) $this->client_id,
             *     'client'        => new ClientResource($this->client),
             */
            is_active: boolean;
            url: string;
            url_label: string;
            links: unknown[];
            overline: string | null;
            headline: string;
            teaser: string;
            image_crop: unknown[] | null;
            image: components["schemas"]["FileResource"];
            cropped_image: string;
            file_id: number | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** SearchSuggestionCollection */
        SearchSuggestionCollection: string[];
        /** SeoRedirectCollection */
        SeoRedirectCollection: string[];
        /** SeoRedirectPatchRequest */
        SeoRedirectPatchRequest: {
            request_url: string;
            target_url: string;
            http_status_code?: number | null;
            type?: string | null;
            domain_id: number;
        };
        /** SeoRedirectPostRequest */
        SeoRedirectPostRequest: {
            request_url: string;
            target_url: string;
            http_status_code?: number | null;
            type?: string | null;
            domain_id: number;
        };
        /** SeoRedirectResource */
        SeoRedirectResource: {
            id: number;
            request_url: string;
            target_url: string;
            http_status_code: number | null;
            type: string;
            /** @enum {string} */
            type_display_name: "Weiterleitung" | "Kurzlink" | "";
            domain: components["schemas"]["DomainResource"];
            client_id: string;
            domain_id: number | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** SeoValueCollection */
        SeoValueCollection: string[];
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
            id: number;
            key: string;
            value: string;
            content: string | null;
            seoable_id: string;
            seoable_type: string;
            attribute_type: string | null;
            seoable_item: components["schemas"]["DomainResource"] | null;
        };
        /** StepCollection */
        StepCollection: string[];
        /** StepPatchRequest */
        StepPatchRequest: {
            name: string;
            type: string;
            trigger_content: string;
            main_content: string;
            client_id: number;
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
            client_id: number;
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
            trigger_content_headline: string | null;
            layer_order_index: number | null;
            main_content: string;
            client?: components["schemas"]["ClientResource"];
            client_id: number;
            parent_id: string | 0;
            pivot: string;
        };
        /** TopicCollection */
        TopicCollection: string[];
        /** TopicPatchRequest */
        TopicPatchRequest: {
            client_id: number;
            name: string;
            categories: string[];
        };
        /** TopicPostRequest */
        TopicPostRequest: {
            client_id: number;
            name: string;
            categories: string[];
        };
        /** TopicResource */
        TopicResource: {
            id: number;
            client_id: number;
            client?: components["schemas"]["ClientResource"] | null;
            name: string;
            categories?: components["schemas"]["CategoryResource"][] | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** TriggeredScoreCollection */
        TriggeredScoreCollection: string[];
        /** TriggeredScoreResource */
        TriggeredScoreResource: {
            id: number;
            score_id: string;
            topic_id: number;
            topic?: components["schemas"]["Motor.Scoring.Http.Resources.V2.TopicResource"];
            scorable_type: string;
            score: number;
            created_at: string;
            updated_at: string;
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
        /** User */
        User: {
            id: number;
            name: string;
            email: string;
            api_token: string;
            show_onboarding: boolean;
            password_last_changed_at: string | null;
            /** Format: date-time */
            created_at: string | null;
            /** Format: date-time */
            updated_at: string | null;
        };
        /** UserPatchRequest */
        UserPatchRequest: {
            name: string;
            /** Format: email */
            email: string;
            password?: string | null;
            clients?: number[] | null;
            roles?: number[] | null;
            permissions?: number[] | null;
            avatar?: {
                dataUrl?: string | null;
                name?: string | null;
            } | null;
        };
        /** UserPostRequest */
        UserPostRequest: {
            name: string;
            /** Format: email */
            email: string;
            password: string;
            clients?: number[] | null;
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
            clients?: components["schemas"]["ClientResource"][];
            roles?: components["schemas"]["RoleResource"][];
            permissions?: components["schemas"]["PermissionResource"][];
            name: string;
            email: string;
            show_onboarding: boolean;
            avatar: components["schemas"]["MediaResource"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.AISystemPromptResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.AISystemPromptResource"][];
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
            /** @description `Motor.Admin.Http.Resources.V2.AISystemPromptResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.AISystemPromptResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.AISystemPromptResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.AISystemPromptResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.AISystemPromptResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.AISystemPromptResource"];
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
    "aIHelp.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AIHelpPostRequest"];
            };
        };
        responses: {
            /** @description `AIHelpResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AIHelpResource"];
                        /** @constant */
                        message: "Ai Help message returned";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "ai_system_prompts.index": {
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
            /** @description Paginated set of `AISystemPromptCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AISystemPromptCollection"][];
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
    "ai_system_prompts.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.AISystemPromptPostRequest"];
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
                        /** @constant */
                        message: "Ai system prompt created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "ai_system_prompts.show": {
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
                        /** @constant */
                        message: "Ai system prompt read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "ai_system_prompts.update": {
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.AISystemPromptPatchRequest"];
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
                        /** @constant */
                        message: "Ai system prompt updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "ai_system_prompts.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting ai system prompt";
                    } | {
                        /** @constant */
                        message: "Ai system prompt deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.ai_system_prompts.index": {
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
            /** @description Paginated set of `AISystemPromptCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AISystemPromptCollection"][];
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
    "v1.ai_system_prompts.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.AISystemPromptPostRequest"];
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
                        /** @constant */
                        message: "Ai system prompt created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.ai_system_prompts.show": {
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
                        /** @constant */
                        message: "Ai system prompt read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.ai_system_prompts.update": {
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.AISystemPromptPatchRequest"];
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
                        /** @constant */
                        message: "Ai system prompt updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.ai_system_prompts.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting ai system prompt";
                    } | {
                        /** @constant */
                        message: "Ai system prompt deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "admin_navigations.index": {
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
    "approval.index": {
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
            /** @description Paginated set of `ApprovalCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApprovalCollection"][];
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
    "approval.update": {
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
                        /** @constant */
                        message: "Approval updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
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
            /** @description Paginated set of `Motor.Builder.Http.Resources.V2.ApprovalResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.ApprovalResource"][];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.ApprovalPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.ApprovalResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.ApprovalResource"];
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
    "auth.login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: email */
                    email: string;
                    password: string;
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
                        /** @constant */
                        status: "Success";
                        message: null;
                        data: {
                            token: string;
                        };
                    };
                };
            };
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        status: "Error";
                        /** @constant */
                        message: "Credentials not match";
                        data: null;
                    };
                };
            };
            422: components["responses"]["ValidationException"];
        };
    };
    "auth.logout": {
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
                        /** @constant */
                        message: "Tokens Revoked";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderCustomComponent.duplicate": {
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
                        /** @constant */
                        message: "BuilderPages duplicated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builder_custom_components.index": {
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
            /** @description Paginated set of `BuilderCustomComponentCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentCollection"][];
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
    "builder_custom_components.store": {
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
            /** @description `BuilderCustomComponentResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "BuilderCustomComponent created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builder_custom_components.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder custom component ID */
                builder_custom_component: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderCustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "BuilderCustomComponent read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builder_custom_components.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder custom component ID */
                builder_custom_component: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderCustomComponentPatchRequest"];
            };
        };
        responses: {
            /** @description `BuilderCustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "BuilderCustomComponent updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builder_custom_components.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The builder custom component ID */
                builder_custom_component: number;
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
                        message: "BuilderCustomComponent deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderCustomComponent.setPublishedStatus": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The record ID */
                record: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BuilderPageSetPublishedStatusRequest"];
            };
        };
        responses: {
            /**
             * @description `BuilderCustomComponentResource`
             *
             *     `BuilderCustomComponentResource`
             */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "Published status set";
                    } | {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "Publishing approval created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderCustomComponent.getRevisions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The record ID */
                record: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `BuilderCustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentCollection"];
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
                        /** @constant */
                        message: "BuilderCustomComponent Revision collection read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderCustomComponent.setRevision": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The record ID */
                record: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPageSetRevisionRequest"];
            };
        };
        responses: {
            /** @description `BuilderCustomComponentResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "Revision set";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderCustomComponent.getPages": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The record ID */
                record: number;
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
                    "application/json": unknown[];
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderCustomComponent.showByUUID": {
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
            /** @description `BuilderCustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "BuilderPage read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderCustomComponentDefinition.showCurrent": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderCustomComponentResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "CustomComponent read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderCustomComponentDefinition.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderCustomComponentResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "CustomComponent read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderCustomComponentDefinition.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPageDefinitionPostRequest"];
            };
        };
        responses: {
            /** @description `BuilderCustomComponentResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderCustomComponentResource"];
                        /** @constant */
                        message: "CustomComponent created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
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
            /** @description `Motor.Builder.Http.Resources.V2.ApprovalCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.ApprovalCollection"];
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
    "builderPageCaches.show": {
        parameters: {
            query?: {
                route?: string;
                uuid?: string;
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
                    "application/json": string;
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Unable to read domain";
                    } | {
                        /** @constant */
                        message: "Domain not authorized";
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Page not found";
                    } | {
                        /** @constant */
                        message: "Page not found";
                        domain_name: string;
                    } | {
                        message: string;
                        domain_name: string;
                    };
                };
            };
        };
    };
    "builderPageClearRedisCache.index": {
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
                        /** @constant */
                        message: "Cache cleared";
                    };
                };
            };
        };
    };
    "builderPageDefinition.showCurrent": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        /** @constant */
                        message: "BuilderPage read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "motor.builder.builderPageDefinition.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        /** @constant */
                        message: "BuilderPage read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderPageDefinition.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BuilderPageDefinitionPostRequest"];
            };
        };
        responses: {
            /** @description `BuilderPageResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        /** @constant */
                        message: "BuilderPage created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "motor.builder.v2.builderPageDefinition.show": {
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
            /** @description `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
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
            /** @description `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
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
            /** @description `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
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
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BuilderTemporaryPagePostRequest"] & {
                    page_id?: string;
                    client_id?: string;
                    language_id?: string;
                };
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderPageSetPublishedStatusRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
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
            /** @description `Motor.Builder.Http.Resources.V2.PublishingTimeCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.PublishingTimeCollection"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderPageSetRevisionRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
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
    "builder_pages.index": {
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
            422: components["responses"]["ValidationException"];
        };
    };
    "builder_pages.store": {
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
            /** @description `BuilderPageResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        /** @constant */
                        message: "BuilderPage created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builder_pages.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                builder_page: string;
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
                        /** @constant */
                        message: "BuilderPage read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builder_pages.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                builder_page: string;
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
                        /** @constant */
                        message: "BuilderPage updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builder_pages.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                builder_page: string;
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
                        message: "BuilderPage deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "No BuilderPages could be found that can be deleted.";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderPages.showByUUID": {
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
                        /** @constant */
                        message: "BuilderPage read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderPages.pageList": {
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
                        /** @constant */
                        message: "BuilderPage select list";
                        data: components["schemas"]["BuilderPage"][];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "motor.builder.builderPages.search": {
        parameters: {
            query: {
                searchString: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `BuilderPageCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageCollection"];
                        /** @constant */
                        message: "BuilderPage search result";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderPages.setPublishedStatus": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The record ID */
                record: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BuilderPageSetPublishedStatusRequest"];
            };
        };
        responses: {
            /**
             * @description `BuilderPageReducedResource`
             *
             *     `BuilderPageReducedResource`
             *
             *     `BuilderPageReducedResource`
             */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageReducedResource"];
                        /** @constant */
                        message: "Published status NOT set";
                        /** @constant */
                        error: "Publishing time already exists for this BuilderPage";
                    } | {
                        data: components["schemas"]["BuilderPageReducedResource"];
                        /** @constant */
                        message: "Published status set";
                    } | {
                        data: components["schemas"]["BuilderPageReducedResource"];
                        /** @constant */
                        message: "Publishing approval created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderPages.getRevisions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `BuilderPageReducedResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageReducedCollection"];
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
                        /** @constant */
                        message: "BuilderPage Revision collection read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "builderPages.setRevision": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The record ID */
                record: number;
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
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageResource"];
                        /** @constant */
                        message: "Revision set";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderPages.duplicate": {
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
                        /** @constant */
                        message: "BuilderPages duplicated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "motor.builder.frontend.builderPages.show": {
        parameters: {
            query?: {
                route?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `Motor.Builder.Http.Resources.Frontend.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.Frontend.BuilderPageResource"];
                        /** @constant */
                        message: "BuilderPage read";
                        domain_name: string;
                    };
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Unable to read domain";
                    } | {
                        /** @constant */
                        message: "Domain not authorized";
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Page not found";
                        domain_name: string;
                    } | {
                        message: string;
                        domain_name: string;
                    };
                };
            };
        };
    };
    "motor.builder.frontend.builderPages.search": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                searchTerm: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `BuilderPageSearchResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageSearchResource"][];
                        /** @constant */
                        message: "BuilderPage search result";
                        products: components["schemas"]["BuilderPageSearchResource"][];
                    };
                };
            };
        };
    };
    "builderPages.suggestion": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                searchTerm: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `SearchSuggestionCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SearchSuggestionCollection"];
                        /** @constant */
                        message: "Search suggestion result";
                    };
                };
            };
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
            /** @description Paginated set of `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"][];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderPagePostRequest"];
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
            /** @description `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderPagePatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
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
            /** @description `Motor.Builder.Http.Resources.V2.BuilderPageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.BuilderPageResource"];
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
    "builderPagesReduced.index": {
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
            /** @description Paginated set of `BuilderPageReducedCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderPageReducedCollection"][];
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
    "publishing_times.index": {
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
            /** @description Paginated set of `PublishingTimeCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PublishingTimeCollection"][];
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
    "publishing_times.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                    "application/json": {
                        /** @constant */
                        message: "Publishing time deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting publishing time";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "builderTemporaryPages.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.BuilderTemporaryPagePostRequest"] & {
                    page_id?: string;
                    client_id?: string;
                    language_id?: string;
                };
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
                        /** @constant */
                        message: "Domain created";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Client ID, page definition or UUID not found";
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
            422: components["responses"]["ValidationException"];
        };
    };
    "builderTemporaryPages.refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.BuilderTemporaryPagePostRequest"] & {
                    page_id?: string;
                    client_id?: string;
                    /** @description Not used currently */
                    language_id?: string;
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
                        /** @constant */
                        message: "Preview updated";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Client ID, page definition or UUID not found";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "builderTemporaryPages.generateForId": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BuilderTemporaryPageForIDRequest"] & {
                    page_id?: string;
                    language_id?: string;
                };
            };
        };
        responses: {
            /**
             * @description FIXME: what is this return value?! this makes no sense in the context of a preview
             *
             *
             *
             *     `DomainResource`
             */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainResource"];
                        /** @constant */
                        message: "Domain created";
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
                        message: "Page definition not found";
                    } | {
                        /** @constant */
                        message: "Page not found";
                    } | {
                        /** @constant */
                        message: "Domain not found";
                    };
                };
            };
            422: components["responses"]["ValidationException"];
        };
    };
    "categories.index": {
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
            /** @description Paginated set of `CategoryCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryCollection"][];
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
    "categories.store": {
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
                        /** @constant */
                        message: "Category created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "categories.show": {
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
                        data: components["schemas"]["CategoryResource"];
                        /** @constant */
                        message: "Category read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "categories.update": {
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
                        /** @constant */
                        message: "Category updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "categories.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                category_tree: string;
                /** @description The category ID */
                category: number;
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
                        message: "Category deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting category";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.categories.index": {
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
            /** @description Paginated set of `CategoryCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CategoryCollection"][];
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
    "v1.categories.store": {
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
                        /** @constant */
                        message: "Category created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.categories.show": {
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
                        data: components["schemas"]["CategoryResource"];
                        /** @constant */
                        message: "Category read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.categories.update": {
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
                        /** @constant */
                        message: "Category updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.categories.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                category_tree: string;
                /** @description The category ID */
                category: number;
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
                        message: "Category deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting category";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
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
            /** @description `Motor.Admin.Http.Resources.V2.CategoryCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryCollection"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.CategoryResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"][];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.CategoryPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.CategoryResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.CategoryResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.CategoryPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.CategoryResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.CategoryResource"];
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
    "steps.index": {
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
            /** @description Paginated set of `StepCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StepCollection"][];
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
    "steps.store": {
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
                        /** @constant */
                        message: "Step created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "steps.show": {
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
                        /** @constant */
                        message: "Step read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "steps.update": {
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
                        /** @constant */
                        message: "Step updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "steps.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Step deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
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
            /** @description Paginated set of `Motor.Assistant.Http.Resources.V2.StepResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.V2.StepResource"][];
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
                "application/json": components["schemas"]["Motor.Assistant.Http.Requests.Api.V2.StepPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Assistant.Http.Resources.V2.StepResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.V2.StepResource"];
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
            /** @description `Motor.Assistant.Http.Resources.V2.StepResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.V2.StepResource"];
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
                "application/json": components["schemas"]["Motor.Assistant.Http.Requests.Api.V2.StepPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Assistant.Http.Resources.V2.StepResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.V2.StepResource"];
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
    "clickpaths.index": {
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
            /** @description Paginated set of `ClickpathCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClickpathCollection"][];
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
    "clickpaths.store": {
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
                        /** @constant */
                        message: "Clickpath created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "clickpaths.show": {
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
                        /** @constant */
                        message: "Clickpath read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "clickpaths.update": {
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
                        /** @constant */
                        message: "Clickpath updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "clickpaths.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Clickpath deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.assistant.clickpaths.getSteps": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clickpath_id: string;
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
                    "application/json": Record<string, never>;
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "clickpaths.attachStep": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clickpath_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ClickpathAttachStepPostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Step added to Clickpath";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "clickpaths.detachStep": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                clickpath_id: string;
                step_id: string;
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
                        message: "Step removed from Clickpath";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
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
            /** @description Paginated set of `Motor.Assistant.Http.Resources.V2.ClickpathResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.V2.ClickpathResource"][];
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
                "application/json": components["schemas"]["Motor.Assistant.Http.Requests.Api.V2.ClickpathPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Assistant.Http.Resources.V2.ClickpathResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.V2.ClickpathResource"];
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
            /** @description `Motor.Assistant.Http.Resources.V2.ClickpathResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.V2.ClickpathResource"];
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
                "application/json": components["schemas"]["Motor.Assistant.Http.Requests.Api.V2.ClickpathPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Assistant.Http.Resources.V2.ClickpathResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.V2.ClickpathResource"];
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
    "motor.assistant.v2.clickpaths.getSteps": {
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
    "motor.assistant.frontend.clickpaths.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `Motor.Assistant.Http.Resources.Frontend.ClickpathCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.Frontend.ClickpathCollection"];
                        /** @constant */
                        message: "Clickpath collection read";
                    };
                };
            };
        };
    };
    "motor.assistant.frontend.clickpaths.show": {
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
            /** @description `Motor.Assistant.Http.Resources.Frontend.ClickpathResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Assistant.Http.Resources.Frontend.ClickpathResource"];
                        /** @constant */
                        message: "Clickpath read";
                    };
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "clients.index": {
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
            /** @description Paginated set of `ClientCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClientCollection"][];
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
    "clients.store": {
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
                        /** @constant */
                        message: "Client created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "clients.show": {
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
                        /** @constant */
                        message: "Client read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "clients.update": {
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
                        /** @constant */
                        message: "Client updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "clients.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Client deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.clients.index": {
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
            /** @description Paginated set of `ClientCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClientCollection"][];
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
    "v1.clients.store": {
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
                        /** @constant */
                        message: "Client created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.clients.show": {
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
                        /** @constant */
                        message: "Client read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.clients.update": {
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
                        /** @constant */
                        message: "Client updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.clients.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Client deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.ClientResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"][];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.ClientPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.ClientResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.ClientResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.ClientPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.ClientResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.ClientResource"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.ConfigVariableResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.ConfigVariableResource"][];
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
            /** @description `Motor.Admin.Http.Resources.V2.ConfigVariableResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.ConfigVariableResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.ConfigVariableResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.ConfigVariableResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.ConfigVariableResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.ConfigVariableResource"];
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
    "config_variables.index": {
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
            /** @description Paginated set of `ConfigVariableCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConfigVariableCollection"][];
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
    "config_variables.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.ConfigVariablePostRequest"];
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
                        /** @constant */
                        message: "Config variable created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "config_variables.show": {
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
                        /** @constant */
                        message: "Config variable read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "config_variables.update": {
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.ConfigVariablePatchRequest"];
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
                        /** @constant */
                        message: "Config variable updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "config_variables.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Config variable deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting config variable";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.config_variables.index": {
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
            /** @description Paginated set of `ConfigVariableCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ConfigVariableCollection"][];
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
    "v1.config_variables.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.ConfigVariablePostRequest"];
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
                        /** @constant */
                        message: "Config variable created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.config_variables.show": {
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
                        /** @constant */
                        message: "Config variable read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.config_variables.update": {
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.ConfigVariablePatchRequest"];
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
                        /** @constant */
                        message: "Config variable updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.config_variables.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Config variable deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting config variable";
                    };
                };
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderPageSetPublishedStatusRequest"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderCustomComponentPostRequest"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderCustomComponentPatchRequest"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderPageDefinitionPostRequest"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.BuilderPageSetRevisionRequest"];
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
    "motor.contentType.customContentField.updateSortPositions": {
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
                        /** @constant */
                        message: "Content Field Sort Positions updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "custom-content-fields.index": {
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
    "custom-content-fields.store": {
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
                    "application/json": components["schemas"]["CustomContentFieldResource"] & {
                        /** @constant */
                        message: "Custom content field created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "custom-content-fields.show": {
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
                    "application/json": components["schemas"]["CustomContentFieldResource"] & {
                        /** @constant */
                        message: "Custom content field read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "custom-content-fields.update": {
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
                    "application/json": components["schemas"]["CustomContentFieldResource"] & {
                        /** @constant */
                        message: "Custom content field updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "custom-content-fields.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Custom content field deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customContentField.attachField": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customContentField: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentFieldAttachPostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Child Content Field added to Content Field";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "customContentField.detachField": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                field_parent_id: string;
                field_child_id: string;
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
                        message: "Child Content Field removed from Content Field";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "custom-content-field-conditionals.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentFieldConditionalPostRequest"];
            };
        };
        responses: {
            /** @description `CustomContentFieldConditionalResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentFieldConditionalResource"];
                        /** @constant */
                        message: "Custom content field conditional created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "custom-content-field-conditionals.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content field conditional ID */
                customContentFieldConditional: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentFieldConditionalPatchRequest"];
            };
        };
        responses: {
            /** @description `CustomContentFieldConditionalResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentFieldConditionalResource"];
                        /** @constant */
                        message: "Custom content field conditional updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "custom-content-field-conditionals.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The custom content field conditional ID */
                customContentFieldConditional: number;
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
                        message: "Custom content field conditional deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.contentType.customContentFieldData.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentFieldDataPostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "customContentFieldData.index": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentFieldData"][];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "customContentFieldData.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentFieldDataPatchRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "customContentFieldData.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Custom content field data deleted";
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
                        message: "Problem deleting custom content field data";
                    };
                };
            };
        };
    };
    "motor.contentType.frontend.customContentFieldData.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.ContentType.Http.Requests.Api.Frontend.CustomContentFieldDataPostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Form data submitted";
                    };
                };
            };
            422: components["responses"]["ValidationException"];
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "You have already submitted this form. Please wait a few seconds before submitting again.";
                    };
                };
            };
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
            /** @description Paginated set of `Motor.ContentType.Http.Resources.V2.CustomContentFieldResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentFieldResource"][];
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
                "application/json": components["schemas"]["Motor.ContentType.Http.Requests.Api.V2.CustomContentFieldPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.ContentType.Http.Resources.V2.CustomContentFieldResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentFieldResource"];
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
            /** @description `Motor.ContentType.Http.Resources.V2.CustomContentFieldResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentFieldResource"];
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
                "application/json": components["schemas"]["Motor.ContentType.Http.Requests.Api.V2.CustomContentFieldPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.ContentType.Http.Resources.V2.CustomContentFieldResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentFieldResource"];
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
    "motor.contentType.v2.customContentField.updateSortPositions": {
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
    "custom-content-types.index": {
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
    "custom-content-types.store": {
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
                        /** @constant */
                        message: "Custom content type created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "custom-content-types.show": {
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
                        data: components["schemas"]["CustomContentTypeResource"];
                        /** @constant */
                        message: "Custom content type read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "custom-content-types.update": {
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
                        /** @constant */
                        message: "Custom content type updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "custom-content-types.destroy": {
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
                    "application/json": {
                        /** @constant */
                        message: "Custom content type deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "customContentType.getConfig": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `FormConfigResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "No config found";
                    } | {
                        data: components["schemas"]["FormConfigResource"];
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "customContentType.getContentTypeData": {
        parameters: {
            query?: {
                search?: string | null;
                page?: number | null;
                per_page?: number | null;
                client_id?: number | null;
                type?: string | null;
            };
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
                    "application/json": string;
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "customContentType.attachType": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customContentType: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomContentTypeAttachPostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Child Content Type added to Content Type";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "customContentType.detachType": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type_parent_id: string;
                type_child_id: string;
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
                        message: "Child Content Type removed from Content Type";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "motor.contentType.frontend.customContentType.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CustomContentTypeCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomContentTypeCollection"];
                        /** @constant */
                        message: "Custom Content Type collection read";
                    };
                };
            };
        };
    };
    "motor.contentType.frontend.customContentType.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `Motor.ContentType.Http.Resources.Frontend.CustomContentTypeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.Frontend.CustomContentTypeResource"];
                        /** @constant */
                        message: "Custom Content Type read";
                    };
                };
            };
        };
    };
    "custom_content_types.usage": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                content_type_id: string;
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
                        data: {
                            form_config_id: number;
                            form_component_uuid: string;
                            form_name: string | "Unbekanntes Formular";
                            email_templates: ({
                                id: number;
                                name: string;
                                /** @constant */
                                type: "user_email";
                                /** @constant */
                                type_label: "Benutzer";
                            } | {
                                id: number;
                                name: string;
                                /** @constant */
                                type: "target_email";
                                /** @constant */
                                type_label: "Redaktion";
                            })[];
                            builder_page: {
                                id: number;
                                name: string;
                                is_published: boolean;
                            } | null;
                        }[];
                        /** @constant */
                        message: "Custom content type usage retrieved successfully";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
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
            /** @description Paginated set of `Motor.ContentType.Http.Resources.V2.CustomContentTypeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentTypeResource"][];
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
                "application/json": components["schemas"]["Motor.ContentType.Http.Requests.Api.V2.CustomContentTypePostRequest"];
            };
        };
        responses: {
            /** @description `Motor.ContentType.Http.Resources.V2.CustomContentTypeResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentTypeResource"];
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
            /** @description `Motor.ContentType.Http.Resources.V2.CustomContentTypeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentTypeResource"];
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
                "application/json": components["schemas"]["Motor.ContentType.Http.Requests.Api.V2.CustomContentTypePatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.ContentType.Http.Resources.V2.CustomContentTypeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.ContentType.Http.Resources.V2.CustomContentTypeResource"];
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
                                created_at: string;
                            }[];
                            activity_meta: {
                                current_page: number;
                                last_page: number;
                                per_page: number;
                                total: number;
                            };
                            publishing_queue: {
                                id: number;
                                name: unknown | "Unknown";
                                to_be_published_at: string | null;
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
    "domains.index": {
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
            /** @description Paginated set of `DomainCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainCollection"][];
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
    "domains.store": {
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
                        /** @constant */
                        message: "Domain created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "domains.show": {
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
                        /** @constant */
                        message: "Domain read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "domains.update": {
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
                        /** @constant */
                        message: "Domain updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "domains.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Domain deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.admin.frontend.domains.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `Motor.Admin.Http.Resources.Frontend.DomainCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.Frontend.DomainCollection"];
                        /** @constant */
                        message: "Domain collection read";
                    };
                };
            };
        };
    };
    "v1.domains.index": {
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
            /** @description Paginated set of `DomainCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainCollection"][];
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
    "v1.domains.store": {
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
                        /** @constant */
                        message: "Domain created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.domains.show": {
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
                        /** @constant */
                        message: "Domain read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.domains.update": {
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
                        /** @constant */
                        message: "Domain updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.domains.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Domain deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.DomainResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.DomainResource"][];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.DomainPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.DomainResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.DomainResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.DomainResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.DomainResource"];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.DomainPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.DomainResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.DomainResource"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.EmailTemplateResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.EmailTemplateResource"][];
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
            /** @description `Motor.Admin.Http.Resources.V2.EmailTemplateResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.EmailTemplateResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.EmailTemplateResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.EmailTemplateResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.EmailTemplateResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.EmailTemplateResource"];
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
    "motor.admin.v2.emailTemplates.duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.GridActionRequest"];
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
    "email_templates.usage": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            form_config_id: number;
                            form_component_uuid: string;
                            form_name: string | "Unbekanntes Formular";
                            /** @description Get name from CustomContentType */
                            custom_content_type_id: number | null;
                            /** @description Add custom_content_type_id */
                            usage_type: ("user_email" | "target_email")[];
                            builder_page: {
                                id: number;
                                name: string;
                                is_published: boolean;
                            } | null;
                        }[];
                        /** @constant */
                        message: "Email template usage retrieved successfully";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "email_templates.index": {
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
            /** @description Paginated set of `EmailTemplateCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EmailTemplateCollection"][];
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
    "email_templates.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.EmailTemplatePostRequest"];
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
                        /** @constant */
                        message: "Email template created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "email_templates.show": {
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
                        /** @constant */
                        message: "Email template read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "email_templates.update": {
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.EmailTemplatePatchRequest"];
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
                        /** @constant */
                        message: "Email template updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "email_templates.destroy": {
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
                    "application/json": {
                        /** @constant */
                        message: "Email template deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting email template";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.admin.emailTemplates.duplicate_0": {
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
                        /** @constant */
                        message: "EmailTemplates duplicated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.email_templates.index": {
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
            /** @description Paginated set of `EmailTemplateCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["EmailTemplateCollection"][];
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
    "v1.email_templates.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.EmailTemplatePostRequest"];
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
                        /** @constant */
                        message: "Email template created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.email_templates.show": {
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
                        /** @constant */
                        message: "Email template read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.email_templates.update": {
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.EmailTemplatePatchRequest"];
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
                        /** @constant */
                        message: "Email template updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.email_templates.destroy": {
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
                    "application/json": {
                        /** @constant */
                        message: "Email template deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting email template";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.admin.emailTemplates.duplicate_0_2": {
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
                        /** @constant */
                        message: "EmailTemplates duplicated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "emailTemplatesSend.send": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailTemplateSendPostRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailTemplate"] | null;
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
                        message: "Email template not found";
                    };
                };
            };
            422: components["responses"]["ValidationException"];
        };
    };
    "files.index": {
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
            /** @description Paginated set of `FileCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FileCollection"][];
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
    "files.store": {
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
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "File created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "files.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                file: string;
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
                        /** @constant */
                        message: "File read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "files.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                file: string;
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
                        /** @constant */
                        message: "File updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "files.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                file: string;
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
                        message: "File deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting file";
                    };
                };
            };
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
            /** @description Paginated set of `Motor.Media.Http.Resources.V2.FileResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Media.Http.Resources.V2.FileResource"][];
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
                "application/json": components["schemas"]["Motor.Media.Http.Requests.Api.V2.FilePostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Media.Http.Resources.V2.FileCollection` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Media.Http.Resources.V2.FileCollection"];
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
            /** @description `Motor.Media.Http.Resources.V2.FileResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Media.Http.Resources.V2.FileResource"];
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
                "application/json": components["schemas"]["Motor.Media.Http.Requests.Api.V2.FilePatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Media.Http.Resources.V2.FileResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Media.Http.Resources.V2.FileResource"];
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
    "form_config_backfill.trigger": {
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
                        success: boolean;
                        /** @constant */
                        message: "Form config backfill started";
                        total_pages: number;
                        total_chunks: number;
                        /** @constant */
                        chunk_size: 50;
                        /** @constant */
                        note: "Jobs are being processed in the background. Check logs for progress.";
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
                        success: boolean;
                        /** @constant */
                        message: "No pages found to process";
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        success: boolean;
                        /** @constant */
                        message: "Failed to start backfill";
                        error: string;
                    };
                };
            };
        };
    };
    "form_config_backfill.status": {
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
                        success: boolean;
                        pending_jobs: string;
                        failed_jobs: string;
                        form_configs: {
                            total: number;
                            with_email_templates: number;
                        };
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
                        success: boolean;
                        /** @constant */
                        message: "Failed to get status";
                        error: string;
                    };
                };
            };
        };
    };
    "clientConfig.show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ClientConfigResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ClientConfigResource"];
                    };
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "footerDefinition.show": {
        parameters: {
            query?: {
                language_id?: string;
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
                    "application/json": 200;
                };
            };
            404: components["responses"]["ModelNotFoundException"];
            /** @description An error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Error overview.
                         * @example Failed to generate footer cache
                         */
                        message: string;
                    };
                };
            };
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
    "health.healthCheckJsonResults": {
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
                    "application/json": string;
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "rpc.import.images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    file_meta: string;
                    /** Format: binary */
                    file_data: string;
                    category_name: string;
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
                        /** @constant */
                        message: "Images are being imported";
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
                        message: "Media category not found";
                    };
                };
            };
            422: components["responses"]["ValidationException"];
        };
    };
    "languages.index": {
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
            /** @description Paginated set of `LanguageCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["LanguageCollection"][];
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
    "languages.store": {
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
                        /** @constant */
                        message: "Language created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "languages.show": {
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
                        /** @constant */
                        message: "Language read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "languages.update": {
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
                        /** @constant */
                        message: "Language updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "languages.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Language deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting language";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.languages.index": {
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
            /** @description Paginated set of `LanguageCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["LanguageCollection"][];
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
    "v1.languages.store": {
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
                        /** @constant */
                        message: "Language created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.languages.show": {
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
                        /** @constant */
                        message: "Language read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.languages.update": {
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
                        /** @constant */
                        message: "Language updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.languages.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Language deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting language";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.LanguageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"][];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.LanguagePostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.LanguageResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.LanguageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.LanguagePatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.LanguageResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.LanguageResource"];
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
    "ekpro.leads.subjects": {
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
                    "application/json": string | null | Record<string, never>;
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": "Es ist ein Fehler beim Abruf der Leaddaten aufgetreten";
                };
            };
        };
    };
    "ekpro.leads.actions": {
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
                    "application/json": string | null | Record<string, never>;
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": "Es ist ein Fehler beim Abruf der Leaddaten aufgetreten";
                };
            };
        };
    };
    "ekpro.leads.subjectgroups": {
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
                    "application/json": string | null | Record<string, never>;
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": "Es ist ein Fehler beim Abruf der Leaddaten aufgetreten";
                };
            };
        };
    };
    "ekpro.leads.channels": {
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
                    "application/json": string | null | Record<string, never>;
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": "Es ist ein Fehler beim Abruf der Leaddaten aufgetreten";
                };
            };
        };
    };
    "metrics.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description abort(499, json_encode($users)); */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        usercount: number;
                        users: components["schemas"]["User"][];
                        domains: unknown[];
                        pages: unknown[];
                        pagecount: number;
                        componentcount: number;
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
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
    "navigationTree.index": {
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
            /** @description `NavigationTreeCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationTreeCollection"];
                        /** @constant */
                        message: "Navigation trees read";
                    };
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.builder.frontend.navigationTrees.index": {
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
                        data: components["schemas"]["NavigationTreeCollection"];
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
                        /** @constant */
                        message: "Navigation tree collection read";
                    };
                };
            };
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
            /** @description Paginated set of `Motor.Builder.Http.Resources.V2.NavigationTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.NavigationTreeResource"][];
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
            /** @description `Motor.Builder.Http.Resources.V2.NavigationTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.NavigationTreeResource"];
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
            /** @description `Motor.Builder.Http.Resources.V2.NavigationTreeResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.NavigationTreeResource"];
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
    "frontend.navigations.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `Motor.Builder.Http.Resources.Frontend.NavigationResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.Frontend.NavigationResource"];
                        /** @constant */
                        message: "Navigation read";
                    };
                };
            };
        };
    };
    "navigations.index": {
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
        };
    };
    "navigations.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                record: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `NavigationReducedResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationReducedResource"];
                        /** @constant */
                        message: "Navigation read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.PermissionGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionGroupResource"][];
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
            /** @description `Motor.Admin.Http.Resources.V2.PermissionGroupResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionGroupResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.PermissionGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionGroupResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.PermissionGroupResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionGroupResource"];
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
    "permission_groups.index": {
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
    "permission_groups.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.PermissionGroupPostRequest"];
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
                        data: components["schemas"]["PermissionGroupResource"];
                        /** @constant */
                        message: "Permission group created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "permission_groups.show": {
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
                        data: components["schemas"]["PermissionGroupResource"];
                        /** @constant */
                        message: "Permission group read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "permission_groups.update": {
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.PermissionGroupPatchRequest"];
            };
        };
        responses: {
            /**
             * @description edit permission names
             *     $permissions = $result->permissions()->get();
             *     foreach ($permissions as $permission) {
             *     We want to replace the prefix of the permission, so we need to explode the name
             *     $permissionNameExploded = explode('.', $permission->name);
             *     We removed the prefix before the dot, so we need to remove it from the array
             *     array_shift($permissionNameExploded);
             *     We need to reassemble the name with the new prefix, so we implode the array
             *     $newPermissionName = implode('.', $permissionNameExploded);
             *     We set the new name of the permission with the new prefix
             *     $permission->name = $result->name.'.'.$newPermissionName;
             *     We save the permission
             *     $permission->save();
             *     }
             *
             *
             *
             *     `PermissionGroupResource`
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionGroupResource"];
                        /** @constant */
                        message: "Permission group updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "permission_groups.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Permission group deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting permission group";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.permission_groups.index": {
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
    "v1.permission_groups.store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.PermissionGroupPostRequest"];
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
                        data: components["schemas"]["PermissionGroupResource"];
                        /** @constant */
                        message: "Permission group created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.permission_groups.show": {
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
                        data: components["schemas"]["PermissionGroupResource"];
                        /** @constant */
                        message: "Permission group read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.permission_groups.update": {
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.PermissionGroupPatchRequest"];
            };
        };
        responses: {
            /**
             * @description edit permission names
             *     $permissions = $result->permissions()->get();
             *     foreach ($permissions as $permission) {
             *     We want to replace the prefix of the permission, so we need to explode the name
             *     $permissionNameExploded = explode('.', $permission->name);
             *     We removed the prefix before the dot, so we need to remove it from the array
             *     array_shift($permissionNameExploded);
             *     We need to reassemble the name with the new prefix, so we implode the array
             *     $newPermissionName = implode('.', $permissionNameExploded);
             *     We set the new name of the permission with the new prefix
             *     $permission->name = $result->name.'.'.$newPermissionName;
             *     We save the permission
             *     $permission->save();
             *     }
             *
             *
             *
             *     `PermissionGroupResource`
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PermissionGroupResource"];
                        /** @constant */
                        message: "Permission group updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.permission_groups.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Permission group deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting permission group";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "permissions.index": {
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
    "permissions.store": {
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
                        /** @constant */
                        message: "Permission created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "permissions.show": {
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
                        /** @constant */
                        message: "Permission read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "permissions.update": {
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
                        /** @constant */
                        message: "Permission updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "permissions.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Permission deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting permission";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.admin.permissions.items_0": {
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
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.permissions.index": {
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
    "v1.permissions.store": {
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
                        /** @constant */
                        message: "Permission created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.permissions.show": {
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
                        /** @constant */
                        message: "Permission read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.permissions.update": {
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
                        /** @constant */
                        message: "Permission updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.permissions.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Permission deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting permission";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.admin.permissions.items_0_2": {
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
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.PermissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionResource"][];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.PermissionPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.PermissionResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.PermissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionResource"];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.PermissionPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.PermissionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.PermissionResource"];
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
    "motor.admin.v2.permissions.items": {
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.PermissionResource` */
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
    get_content: {
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
            /** @description `BuilderTemporaryPageResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BuilderTemporaryPageResource"];
                        /** @constant */
                        message: "BuilderPage preview read";
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Not found";
                    };
                };
            };
        };
    };
    "profile.read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
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
                        data: components["schemas"]["UserResource"];
                        /** @constant */
                        message: "Profile read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "profile.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProfileEditRequest"];
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
                        /** @constant */
                        message: "Profile updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "profile.reset-onboarding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
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
                        data: components["schemas"]["UserResource"];
                        /** @constant */
                        message: "Onboarding reset";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "profile.complete-onboarding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
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
                        data: components["schemas"]["UserResource"];
                        /** @constant */
                        message: "Onboarding completed";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
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
    "robotTxtNavigation.getRobotTxtNavigations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `NavigationCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationCollection"];
                        /** @constant */
                        message: "Navigation collection read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "robotTxtNavigation.getRobotsTxtFileContent": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                filename: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "roles.index": {
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
    "roles.store": {
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
                        /** @constant */
                        message: "Role created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "roles.show": {
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
                        /** @constant */
                        message: "Role read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "roles.update": {
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
                        /** @constant */
                        message: "Role updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "roles.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Role deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting role";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.roles.index": {
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
    "v1.roles.store": {
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
                        /** @constant */
                        message: "Role created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.roles.show": {
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
                        /** @constant */
                        message: "Role read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.roles.update": {
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
                        /** @constant */
                        message: "Role updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.roles.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Role deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting role";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.RoleResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.RoleResource"][];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.RolePostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.RoleResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.RoleResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.RoleResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.RoleResource"];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.RolePatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.RoleResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.RoleResource"];
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
    "scores.index": {
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
            /** @description Paginated set of `ScoreCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ScoreCollection"][];
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
    "scores.store": {
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
                        /** @constant */
                        message: "Score created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "scores.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                score: string;
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
                        /** @constant */
                        message: "Score read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "scores.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                score: string;
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
                        /** @constant */
                        message: "Score updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "scores.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                score: string;
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
                        message: "Score deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting Score";
                    };
                };
            };
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
            /** @description Paginated set of `Motor.Scoring.Http.Resources.V2.ScoreResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.ScoreResource"][];
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
                "application/json": components["schemas"]["Motor.Scoring.Http.Requests.Api.V2.ScorePostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Scoring.Http.Resources.V2.ScoreResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.ScoreResource"];
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
            /** @description `Motor.Scoring.Http.Resources.V2.ScoreResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.ScoreResource"];
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
                "application/json": components["schemas"]["Motor.Scoring.Http.Requests.Api.V2.ScorePatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Scoring.Http.Resources.V2.ScoreResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.ScoreResource"];
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
    "search_configs.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `SearchConfigCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SearchConfigCollection"][];
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
        };
    };
    "search_configs.store": {
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
                        /** @constant */
                        message: "SearchConfig created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "search_configs.show": {
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
                        /** @constant */
                        message: "SearchConfig read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "search_configs.update": {
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
                        /** @constant */
                        message: "SearchConfig updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "search_configs.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "SearchConfig deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "motor.builder.frontend.searchConfigs.show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
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
                        /** @constant */
                        message: "SearchConfiguration read";
                    };
                };
            };
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
            /** @description Paginated set of `Motor.Builder.Http.Resources.V2.SearchConfigResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SearchConfigResource"][];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.SearchConfigPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.SearchConfigResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SearchConfigResource"];
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
            /** @description `Motor.Builder.Http.Resources.V2.SearchConfigResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SearchConfigResource"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.SearchConfigPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.SearchConfigResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SearchConfigResource"];
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
    "seo_redirects.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `SeoRedirectCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoRedirectCollection"][];
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
    "seo_redirects.store": {
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
                        /** @constant */
                        message: "Redirect created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "seo_redirects.show": {
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
                        /** @constant */
                        message: "Redirect read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "seo_redirects.update": {
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
                        /** @constant */
                        message: "Redirect updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "seo_redirects.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Redirect deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "seoRedirect.getRedirectionList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `Motor.Builder.Http.Resources.Frontend.SeoRedirectCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.Frontend.SeoRedirectCollection"];
                        /** @constant */
                        message: "Redirect collection read";
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "No redirect founds for given domain";
                    };
                };
            };
        };
    };
    "seoRedirect.checkRedirection": {
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
                        redirection: boolean;
                    } | {
                        redirection: boolean;
                        target_url: string;
                        http_status_code: string;
                    };
                };
            };
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
            /** @description Paginated set of `Motor.Builder.Http.Resources.V2.SeoRedirectResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SeoRedirectResource"][];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.SeoRedirectPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.SeoRedirectResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SeoRedirectResource"];
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
            /** @description `Motor.Builder.Http.Resources.V2.SeoRedirectResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SeoRedirectResource"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.SeoRedirectPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.SeoRedirectResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SeoRedirectResource"];
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
    "seo_values.index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated set of `SeoValueCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoValueCollection"][];
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
    "seo_values.store": {
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
                        /** @constant */
                        message: "Seo value created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "seo_values.show": {
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
            /** @description `SeoValueResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoValueResource"];
                        /** @constant */
                        message: "Seo value read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "seo_values.update": {
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
                        /** @constant */
                        message: "Seo value updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "seo_values.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Seo value deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "seoValue.getPageSeoValues": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `SeoValueCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SeoValueCollection"];
                        /** @constant */
                        message: "Seo value collection read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.SeoValuePostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.SeoValueResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SeoValueResource"];
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
                "application/json": components["schemas"]["Motor.Builder.Http.Requests.Api.V2.SeoValuePatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Builder.Http.Resources.V2.SeoValueResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Builder.Http.Resources.V2.SeoValueResource"];
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
    "sitemaps.getSitemapFileContent": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                filename: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "topics.index": {
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
            /** @description Paginated set of `TopicCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TopicCollection"][];
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
    "topics.store": {
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
                        /** @constant */
                        message: "Topic created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "topics.show": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                topic: string;
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
                        /** @constant */
                        message: "Topic read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
        };
    };
    "topics.update": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                topic: string;
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
                        /** @constant */
                        message: "Topic updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "topics.destroy": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                topic: string;
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
                        message: "Topic deleted";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting Topic";
                    };
                };
            };
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
            /** @description Paginated set of `Motor.Scoring.Http.Resources.V2.TopicResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.TopicResource"][];
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
                "application/json": components["schemas"]["Motor.Scoring.Http.Requests.Api.V2.TopicPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Scoring.Http.Resources.V2.TopicResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.TopicResource"];
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
            /** @description `Motor.Scoring.Http.Resources.V2.TopicResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.TopicResource"];
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
                "application/json": components["schemas"]["Motor.Scoring.Http.Requests.Api.V2.TopicPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Scoring.Http.Resources.V2.TopicResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.TopicResource"];
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
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.TriggeredScoreCollection"];
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
            /** @description `Motor.Scoring.Http.Resources.V2.TriggeredScoreCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Scoring.Http.Resources.V2.TriggeredScoreCollection"];
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
    "triggeredScore.searchTriggeredScores": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Motor.Scoring.Http.Requests.Api.TriggeredScoreSearchRequest"] & {
                    search?: {
                        0?: {
                            field?: string;
                            operation?: string;
                            value?: string;
                        };
                        1?: {
                            field?: string;
                            operation?: string;
                            value?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /**
             * @description $query = TriggeredScore::query();
             *     $searchQuery = TriggeredScore::validateSearchQuery($request);
             *     $query = TriggeredScore::applySearchQuery($query, $searchQuery);
             *     $res = $query->get();
             *
             *
             *
             *     `TriggeredScoreCollection`
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TriggeredScoreCollection"];
                        /** @constant */
                        message: "TriggeredScores collection read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "triggeredScore.getTriggeredScores": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `TriggeredScoreCollection` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TriggeredScoreCollection"];
                        /** @constant */
                        message: "TriggeredScores collection read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
        };
    };
    "triggeredScore.trigger": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScoreTriggerRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                        /** @constant */
                        ""?: 500;
                    } | {
                        /** @constant */
                        message: "success";
                    };
                };
            };
            422: components["responses"]["ValidationException"];
        };
    };
    "users.index": {
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
    "users.store": {
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
                        /** @constant */
                        message: "User created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "users.show": {
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
                        data: components["schemas"]["UserResource"];
                        /** @constant */
                        message: "User read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "users.update": {
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
                        /** @constant */
                        message: "User updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "users.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "User deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting user";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.users.index": {
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
    "v1.users.store": {
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
                        /** @constant */
                        message: "User created";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.users.show": {
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
                        data: components["schemas"]["UserResource"];
                        /** @constant */
                        message: "User read";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "v1.users.update": {
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
                        /** @constant */
                        message: "User updated";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
            422: components["responses"]["ValidationException"];
        };
    };
    "v1.users.destroy": {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "User deleted";
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        message: "Problem deleting user";
                    };
                };
            };
            401: components["responses"]["AuthenticationException"];
            403: components["responses"]["AuthorizationException"];
            404: components["responses"]["ModelNotFoundException"];
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
            /** @description Paginated set of `Motor.Admin.Http.Resources.V2.UserResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.UserResource"][];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.UserPostRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.UserResource` */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.UserResource"];
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
            /** @description `Motor.Admin.Http.Resources.V2.UserResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.UserResource"];
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
                "application/json": components["schemas"]["Motor.Admin.Http.Requests.Api.V2.UserPatchRequest"];
            };
        };
        responses: {
            /** @description `Motor.Admin.Http.Resources.V2.UserResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Motor.Admin.Http.Resources.V2.UserResource"];
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
