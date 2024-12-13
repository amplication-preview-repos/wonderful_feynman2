import { Module } from "@nestjs/common";
import { FocusAnalyticsModuleBase } from "./base/focusAnalytics.module.base";
import { FocusAnalyticsService } from "./focusAnalytics.service";
import { FocusAnalyticsController } from "./focusAnalytics.controller";
import { FocusAnalyticsResolver } from "./focusAnalytics.resolver";

@Module({
  imports: [FocusAnalyticsModuleBase],
  controllers: [FocusAnalyticsController],
  providers: [FocusAnalyticsService, FocusAnalyticsResolver],
  exports: [FocusAnalyticsService],
})
export class FocusAnalyticsModule {}
