import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FocusAnalyticsService } from "./focusAnalytics.service";
import { FocusAnalyticsControllerBase } from "./base/focusAnalytics.controller.base";

@swagger.ApiTags("focusAnalytics")
@common.Controller("focusAnalytics")
export class FocusAnalyticsController extends FocusAnalyticsControllerBase {
  constructor(protected readonly service: FocusAnalyticsService) {
    super(service);
  }
}
