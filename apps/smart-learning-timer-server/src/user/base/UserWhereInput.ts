/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FocusAnalyticsListRelationFilter } from "../../focusAnalytics/base/FocusAnalyticsListRelationFilter";
import { FocusSessionListRelationFilter } from "../../focusSession/base/FocusSessionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RewardListRelationFilter } from "../../reward/base/RewardListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FocusAnalyticsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FocusAnalyticsListRelationFilter)
  @IsOptional()
  @Field(() => FocusAnalyticsListRelationFilter, {
    nullable: true,
  })
  focusAnalyticsItems?: FocusAnalyticsListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FocusSessionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FocusSessionListRelationFilter)
  @IsOptional()
  @Field(() => FocusSessionListRelationFilter, {
    nullable: true,
  })
  focusSessions?: FocusSessionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RewardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RewardListRelationFilter)
  @IsOptional()
  @Field(() => RewardListRelationFilter, {
    nullable: true,
  })
  rewards?: RewardListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
