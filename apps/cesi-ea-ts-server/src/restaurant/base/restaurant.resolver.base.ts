/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Restaurant } from "./Restaurant";
import { RestaurantCountArgs } from "./RestaurantCountArgs";
import { RestaurantFindManyArgs } from "./RestaurantFindManyArgs";
import { RestaurantFindUniqueArgs } from "./RestaurantFindUniqueArgs";
import { CreateRestaurantArgs } from "./CreateRestaurantArgs";
import { UpdateRestaurantArgs } from "./UpdateRestaurantArgs";
import { DeleteRestaurantArgs } from "./DeleteRestaurantArgs";
import { MenuFindManyArgs } from "../../menu/base/MenuFindManyArgs";
import { Menu } from "../../menu/base/Menu";
import { RestaurantService } from "../restaurant.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Restaurant)
export class RestaurantResolverBase {
  constructor(
    protected readonly service: RestaurantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async _restaurantsMeta(
    @graphql.Args() args: RestaurantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Restaurant])
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async restaurants(
    @graphql.Args() args: RestaurantFindManyArgs
  ): Promise<Restaurant[]> {
    return this.service.restaurants(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Restaurant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "own",
  })
  async restaurant(
    @graphql.Args() args: RestaurantFindUniqueArgs
  ): Promise<Restaurant | null> {
    const result = await this.service.restaurant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Restaurant)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "create",
    possession: "any",
  })
  async createRestaurant(
    @graphql.Args() args: CreateRestaurantArgs
  ): Promise<Restaurant> {
    return await this.service.createRestaurant({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Restaurant)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  async updateRestaurant(
    @graphql.Args() args: UpdateRestaurantArgs
  ): Promise<Restaurant | null> {
    try {
      return await this.service.updateRestaurant({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Restaurant)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "delete",
    possession: "any",
  })
  async deleteRestaurant(
    @graphql.Args() args: DeleteRestaurantArgs
  ): Promise<Restaurant | null> {
    try {
      return await this.service.deleteRestaurant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Menu], { name: "menus" })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async findMenus(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: MenuFindManyArgs
  ): Promise<Menu[]> {
    const results = await this.service.findMenus(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
