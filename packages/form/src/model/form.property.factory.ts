import { Injector } from '@angular/core';

import { YunzaiConfigService, YunzaiSFConfig } from '@yelon/util/config';

import { ArrayProperty } from './array.property';
import { BooleanProperty } from './boolean.property';
import { FormProperty, PropertyGroup } from './form.property';
import { NumberProperty } from './number.property';
import { ObjectProperty } from './object.property';
import { StringProperty } from './string.property';
import { mergeConfig } from '../config';
import { SF_SEQ } from '../const';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { retrieveSchema } from '../utils';
import { SchemaValidatorFactory } from '../validator.factory';

export class FormPropertyFactory {
  private options: YunzaiSFConfig;
  constructor(
    private injector: Injector,
    private schemaValidatorFactory: SchemaValidatorFactory,
    cogSrv: YunzaiConfigService
  ) {
    this.options = mergeConfig(cogSrv);
  }

  createProperty(
    schema: SFSchema,
    ui: SFUISchema | SFUISchemaItem,
    formData: Record<string, unknown>,
    parent: PropertyGroup | null = null,
    propertyId?: string
  ): FormProperty {
    let newProperty: FormProperty | null = null;
    let path = '';
    if (parent) {
      path += parent.path;
      if (parent.parent !== null) {
        path += SF_SEQ;
      }
      switch (parent.type) {
        case 'object':
          path += propertyId;
          break;
        case 'array':
          path += ((parent as ArrayProperty).properties as PropertyGroup[]).length;
          break;
        default:
          throw new Error(`Instanciation of a FormProperty with an unknown parent type: ${parent.type}`);
      }
    } else {
      path = SF_SEQ;
    }

    if (schema.$ref) {
      const refSchema = retrieveSchema(schema, parent!.root.schema.definitions);
      newProperty = this.createProperty(refSchema, ui, formData, parent, path);
    } else {
      // fix required
      if (
        (propertyId && parent!.schema.required!.indexOf(propertyId.split(SF_SEQ).pop()!) !== -1) ||
        ui.showRequired === true
      ) {
        ui._required = true;
      }
      // fix title
      if (schema.title == null) {
        schema.title = propertyId;
      }
      // fix date
      if ((schema.type === 'string' || schema.type === 'number') && !schema.format && !(ui as SFUISchemaItem).format) {
        if ((ui as SFUISchemaItem).widget === 'date')
          ui._format = schema.type === 'string' ? this.options.uiDateStringFormat : this.options.uiDateNumberFormat;
        else if ((ui as SFUISchemaItem).widget === 'time')
          ui._format = schema.type === 'string' ? this.options.uiTimeStringFormat : this.options.uiTimeNumberFormat;
      } else {
        ui._format = ui.format;
      }
      switch (schema.type) {
        case 'integer':
        case 'number':
          newProperty = new NumberProperty(
            this.injector,
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options
          );
          break;
        case 'string':
          newProperty = new StringProperty(
            this.injector,
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options
          );
          break;
        case 'boolean':
          newProperty = new BooleanProperty(
            this.injector,
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options
          );
          break;
        case 'object':
          newProperty = new ObjectProperty(
            this.injector,
            this,
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options
          );
          break;
        case 'array':
          newProperty = new ArrayProperty(
            this.injector,
            this,
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options
          );
          break;
        default:
          throw new TypeError(`Undefined type ${schema.type}`);
      }
    }

    newProperty.propertyId = propertyId;

    if (newProperty instanceof PropertyGroup) {
      this.initializeRoot(newProperty);
    }

    return newProperty;
  }

  private initializeRoot(rootProperty: PropertyGroup): void {
    // rootProperty.init();
    rootProperty._bindVisibility();
  }
}
