import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FocusAnalyticsServiceBase } from "./base/focusAnalytics.service.base";

@Injectable()
export class FocusAnalyticsService extends FocusAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
