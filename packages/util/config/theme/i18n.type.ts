export interface YunzaiThemeI18nConfig {
  /**
   * Overrides the default interpolation start and end delimiters ({{ and }}).
   *
   * 改写默认的插值表达式起止分界符（{{ 和 }}）。
   */
  interpolation?: [string, string];

  /**
   * Internationalization code URL guard parameter name, default: `i18n`
   *
   * 国际化代码 URL 守卫参数名，默认：`i18n`
   */
  paramNameOfUrlGuard?: string;
}
