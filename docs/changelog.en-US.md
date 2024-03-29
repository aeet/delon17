---
order: 100
title: Change Log
type: Other
---

NG-YUNZAI strictly follows [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/).

#### Release Schedule

* Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
* Monthly release: minor version at the end of every month for new features.
* Major version release is not included in this schedule for breaking change and new features.

---

# [17.2.0](https://github.com/hbyunzai/yelon/compare/17.1.0...17.2.0) (2024-02-02)

### Bug Fixes

* fix scrollbar thumb color default is `transparent` ([#1761](https://github.com/hbyunzai/yelon/issues/1761)) ([6861343](https://github.com/hbyunzai/yelon/commit/6861343bbe3219dd588cb7ffc062984fa8a3a64e))
* **form:widget:array:** fix error remove notify ([#1758](https://github.com/hbyunzai/yelon/issues/1758)) ([4957399](https://github.com/hbyunzai/yelon/commit/49573999a63796a93a63eae63f392ff4da994e3d))

### Features

* **abc:st:** add `trackBy` property ([#1760](https://github.com/hbyunzai/yelon/issues/1760)) ([f4b2fec](https://github.com/hbyunzai/yelon/commit/f4b2feca272139ad70b7814e3ce5f407e07ef931))
* **cache:** add `CacheInterceptor` ([#1576](https://github.com/hbyunzai/yelon/issues/1576)) ([837f4f0](https://github.com/hbyunzai/yelon/commit/837f4f0f7ac90da9912be8c6b3a1d7aa0c22b220))


# [17.1.0](https://github.com/hbyunzai/yelon/compare/17.0.5...17.1.0) (2024-01-20)

### Bug Fixes

* **abc:reuse-tab:** fix keep open order ([#1743](https://github.com/hbyunzai/yelon/issues/1743)) ([e17f5e7](https://github.com/hbyunzai/yelon/commit/e17f5e7813ff1da26ce4bada81c5b098bc190b8c))
* **abc:st:** corrected error null value syntax ([#1744](https://github.com/hbyunzai/yelon/issues/1744)) ([69bb0bb](https://github.com/hbyunzai/yelon/commit/69bb0bb432b100cf8a6c5ec87e0fd28dd2923d7d))

### Features

* add Vietnamese locate ([#1751](https://github.com/hbyunzai/yelon/issues/1751)) ([385dc1c](https://github.com/hbyunzai/yelon/commit/385dc1c716327e899f5e61d9823c3deba26ee4bf))
* **cli:** add `withViewTransitions` ([#1736](https://github.com/hbyunzai/yelon/issues/1736)) ([c03a797](https://github.com/hbyunzai/yelon/commit/c03a797c9fb2405acb8455e9c236f23296577c0e))
* **form:** add `setDisabled`, `setRequired` method ([#1733](https://github.com/hbyunzai/yelon/issues/1733)) ([581f197](https://github.com/hbyunzai/yelon/commit/581f197be67e33189aee44b31465fb8b6d21c640))
* **theme:layout-default:** add `hideEmptyChildren` ([#1746](https://github.com/hbyunzai/yelon/issues/1746)) ([b6ab5f0](https://github.com/hbyunzai/yelon/commit/b6ab5f01c18d1668989925377da84b467aa8ee27))
* **abc:auto-focus:** perf code ([#1753](https://github.com/hbyunzai/yelon/issues/1753)) ([7032139](https://github.com/hbyunzai/yelon/commit/7032139472381e5f4619dc0b71c31e43a986965b))
* **auth:** remove default value of `ignores` ([#1745](https://github.com/hbyunzai/yelon/issues/1745)) ([e473ff4](https://github.com/hbyunzai/yelon/commit/e473ff4efc4299a7f2cb2e96dd44fdefedae8e82))
* support Standalone ([#1750](https://github.com/hbyunzai/yelon/issues/1750)) ([7940464](https://github.com/hbyunzai/yelon/commit/7940464f69f93f3a1c3013a916d29f73146516d9))


## <small>17.0.5 (2023-12-25)</small>

* fix(abc:st): fix export mismatch (#1740) ([a46f2ee](https://github.com/hbyunzai/yelon/commit/a46f2ee)), closes [#1740](https://github.com/hbyunzai/yelon/issues/1740)
* fix(form:array): fix invalid trackBy (#1741) ([3e55228](https://github.com/hbyunzai/yelon/commit/3e55228)), closes [#1741](https://github.com/hbyunzai/yelon/issues/1741)


## <small>17.0.4 (2023-12-20)</small>

* fix(abc:se): fix missing required of reactive (#1737) ([a2ca109](https://github.com/hbyunzai/yelon/commit/a2ca109)), closes [#1737](https://github.com/hbyunzai/yelon/issues/1737)
* fix(abc:sv): fix bottom spacing in border mode (#1732) ([b5bea4e](https://github.com/hbyunzai/yelon/commit/b5bea4e)), closes [#1732](https://github.com/hbyunzai/yelon/issues/1732)
* fix(util:pipe:filter): use `pure` (#1735) ([f374209](https://github.com/hbyunzai/yelon/commit/f374209)), closes [#1735](https://github.com/hbyunzai/yelon/issues/1735)
* fix(cli): correct 'providers' spelling errors (#1731) ([5eafa8f](https://github.com/hbyunzai/yelon/commit/5eafa8f)), closes [#1731](https://github.com/hbyunzai/yelon/issues/1731)
s

## <small>17.0.3 (2023-12-08)</small>

* fix(theme:i18n): correct params type of `i18e` pipe (#1723) ([bdf0e62](https://github.com/hbyunzai/yelon/commit/bdf0e62)), closes [#1723](https://github.com/hbyunzai/yelon/issues/1723)
* fix(cli): correct null value handling (#1724) ([c88c9f2](https://github.com/hbyunzai/yelon/commit/c88c9f2)), closes [#1724](https://github.com/hbyunzai/yelon/issues/1724)


## <small>17.0.2 (2023-11-27)</small>

* fix(cli): fix cannot find module `@angular/cdk/schematics` (#1721) ([49a84a1](https://github.com/hbyunzai/yelon/commit/49a84a1)), closes [#1721](https://github.com/hbyunzai/yelon/issues/1721)

## <small>17.0.1 (2023-11-26)</small>

* fix(cli): fix node 20 version (#1719) ([df40bb3](https://github.com/hbyunzai/yelon/commit/df40bb3)), closes [#1719](https://github.com/hbyunzai/yelon/issues/1719)

## 17.0.0 (2023-11-26)

### Breaking Changes

* refactor(form): refining low-frequency widgets (#1668) ([8ab0e82](https://github.com/hbyunzai/yelon/commit/8ab0e82)), closes [#1668](https://github.com/hbyunzai/yelon/issues/1668)
* build: remove `networkEnv` plugin instead of [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.md) (#1680) ([b7dbc68](https://github.com/hbyunzai/yelon/commit/b7dbc68)), closes [#1680](https://github.com/hbyunzai/yelon/issues/1680)
* feat(acl): remove `forRoot` (#1690) ([4472d48](https://github.com/hbyunzai/yelon/commit/4472d48)), closes [#1690](https://github.com/hbyunzai/yelon/issues/1690)

### Features

* feat(cli): support use `ng add ng-yunzai` in multiple projects (#1664) ([e5476e2](https://github.com/hbyunzai/yelon/commit/e5476e2)), closes [#1664](https://github.com/hbyunzai/yelon/issues/1664)
* feat(theme): add `provideYunzai` (#1697) ([4311426](https://github.com/hbyunzai/yelon/commit/4311426)), closes [#1697](https://github.com/hbyunzai/yelon/issues/1697)
* feat(abc:cell): add `provideCellWidgets` (#1700) ([7ea0daf](https://github.com/hbyunzai/yelon/commit/7ea0daf)), closes [#1700](https://github.com/hbyunzai/yelon/issues/1700)
* feat(abc:reuse-tab): add `provideReuseTabConfig` (#1707) ([2f85357](https://github.com/hbyunzai/yelon/commit/2f85357)), closes [#1707](https://github.com/hbyunzai/yelon/issues/1707)
* feat(abc:st): add `provideSTWidgets` (#1701) ([065316a](https://github.com/hbyunzai/yelon/commit/065316a)), closes [#1701](https://github.com/hbyunzai/yelon/issues/1701)
* feat(theme:_httpclient): add `timestampSecond` (#1670) ([051b087](https://github.com/hbyunzai/yelon/commit/051b087)), closes [#1670](https://github.com/hbyunzai/yelon/issues/1670)
* feat(theme:pipe:date): add global config (#1711) ([b3b93fa](https://github.com/hbyunzai/yelon/commit/b3b93fa)), closes [#1711](https://github.com/hbyunzai/yelon/issues/1711)
* feat: add `provideYunzaiConfig` (#1689) ([b9e0fad](https://github.com/hbyunzai/yelon/commit/b9e0fad)), closes [#1689](https://github.com/hbyunzai/yelon/issues/1689)
* feat(auth): add `provideAuth` (#1704) ([c0c731b](https://github.com/hbyunzai/yelon/commit/c0c731b)), closes [#1704](https://github.com/hbyunzai/yelon/issues/1704)
* feat(form): add `provideSFConfig` (#1702) ([2404802](https://github.com/hbyunzai/yelon/commit/2404802)), closes [#1702](https://github.com/hbyunzai/yelon/issues/1702)
* feat(mock): add `mockInterceptor` (#1698) ([da051b2](https://github.com/hbyunzai/yelon/commit/da051b2)), closes [#1698](https://github.com/hbyunzai/yelon/issues/1698)
* feat(mock): support asynchronous (`Promise`, `Observable`) of response (#1686) ([d7980db](https://github.com/hbyunzai/yelon/commit/d7980db)), closes [#1686](https://github.com/hbyunzai/yelon/issues/1686)
* feat(mock): add `provideYelonMockConfig` (#1695) ([683ab23](https://github.com/hbyunzai/yelon/commit/683ab23)), closes [#1695](https://github.com/hbyunzai/yelon/issues/1695)
* feat(testing): add `delay` function (#1682) ([f83ea57](https://github.com/hbyunzai/yelon/commit/f83ea57)), closes [#1682](https://github.com/hbyunzai/yelon/issues/1682)
* build: support pnpm and update yarn to `4` (#1678) ([b904b9a](https://github.com/hbyunzai/yelon/commit/b904b9a)), closes [#1678](https://github.com/hbyunzai/yelon/issues/1678)

### Bug Fixes

* fix(theme:preloader): fix loading order issues (#1691) ([f09c324](https://github.com/hbyunzai/yelon/commit/f09c324)), closes [#1691](https://github.com/hbyunzai/yelon/issues/1691)
* fix(cli:update): automatically add @_mock path (#1675) ([d014b54](https://github.com/hbyunzai/yelon/commit/d014b54)), closes [#1675](https://github.com/hbyunzai/yelon/issues/1675)

## Old Versions

All releases notes can be found [here](https://github.com/hbyunzai/ng-yunzai/releases).
