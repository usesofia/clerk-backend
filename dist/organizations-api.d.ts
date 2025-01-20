import { ClerkClient as _ClerkClient, Organization, OrganizationInvitation, OrganizationMembership, OrganizationMembershipRole } from '@clerk/backend';
import { ClerkLogger } from './clerk-logger.interface';
import { PaginatedResourceResponse } from '@clerk/backend/dist/api/resources/Deserializer';
export declare class OrganizationAPI {
    private client;
    private logger;
    constructor(client: _ClerkClient, logger: ClerkLogger);
    getOrganization({ organizationId, }: {
        organizationId: string;
    }): Promise<Organization>;
    createOrganizationInvitation({ organizationId, inviterUserId, emailAddress, role, redirectUrl, publicMetadata, }: {
        organizationId: string;
        inviterUserId: string;
        emailAddress: string;
        role: OrganizationMembershipRole;
        redirectUrl?: string;
        publicMetadata?: OrganizationInvitationPublicMetadata;
    }): Promise<OrganizationInvitation>;
    getOrganizationMembershipList({ organizationId, limit, offset, }: {
        organizationId: string;
        limit?: number;
        offset?: number;
    }): Promise<PaginatedResourceResponse<OrganizationMembership[]>>;
    revokeOrganizationInvitation({ organizationId, invitationId, requestingUserId, }: {
        organizationId: string;
        invitationId: string;
        requestingUserId: string;
    }): Promise<unknown>;
    getOrganizationInvitationList({ organizationId, limit, offset, }: {
        organizationId: string;
        limit?: number;
        offset?: number;
    }): Promise<unknown>;
    deleteOrganizationMembership({ organizationId, userId, }: {
        organizationId: string;
        userId: string;
    }): Promise<unknown>;
    updateOrganizationMembership({ organizationId, userId, role, }: {
        organizationId: string;
        userId: string;
        role: OrganizationMembershipRole;
    }): Promise<unknown>;
    createOrganization({ name, slug, createdBy, maxAllowedMemberships, publicMetadata, privateMetadata, }: {
        name: string;
        slug?: string;
        createdBy?: string;
        maxAllowedMemberships?: number;
        publicMetadata?: OrganizationPublicMetadata;
        privateMetadata?: OrganizationPrivateMetadata;
    }): Promise<unknown>;
    updateOrganizationLogo(organizationId: string, { file, uploaderUserId, }: {
        file: Blob | File;
        uploaderUserId?: string;
    }): Promise<unknown>;
    updateOrganization(organizationId: string, { name, slug, publicMetadata, privateMetadata, }: {
        name?: string;
        slug?: string;
        publicMetadata?: OrganizationPublicMetadata;
        privateMetadata?: OrganizationPrivateMetadata;
    }): Promise<Organization>;
    deleteOrganization(organizationId: string): Promise<Organization>;
    createOrganizationMembership({ organizationId, userId, role, }: {
        organizationId: string;
        userId: string;
        role: OrganizationMembershipRole;
    }): Promise<OrganizationMembership>;
    getOrganizationList({ includeMembersCount, query, limit, offset, }: {
        includeMembersCount?: boolean;
        query?: string;
        limit?: number;
        offset?: number;
    }): Promise<PaginatedResourceResponse<Organization[]>>;
}
