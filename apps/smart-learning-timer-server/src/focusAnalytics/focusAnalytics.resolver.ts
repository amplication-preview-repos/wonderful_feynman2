import * as graphql from "@nestjs/graphql";
import { FocusAnalyticsResolverBase } from "./base/focusAnalytics.resolver.base";
import { FocusAnalytics } from "./base/FocusAnalytics";
import { FocusAnalyticsService } from "./focusAnalytics.service";

@graphql.Resolver(() => FocusAnalytics)
export class FocusAnalyticsResolver extends FocusAnalyticsResolverBase {
  constructor(protected readonly service: FocusAnalyticsService) {
    super(service);
  }
}
