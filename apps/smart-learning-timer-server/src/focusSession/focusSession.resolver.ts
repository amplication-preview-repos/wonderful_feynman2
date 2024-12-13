import * as graphql from "@nestjs/graphql";
import { FocusSessionResolverBase } from "./base/focusSession.resolver.base";
import { FocusSession } from "./base/FocusSession";
import { FocusSessionService } from "./focusSession.service";

@graphql.Resolver(() => FocusSession)
export class FocusSessionResolver extends FocusSessionResolverBase {
  constructor(protected readonly service: FocusSessionService) {
    super(service);
  }
}
