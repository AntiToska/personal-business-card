export interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  image: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'ECA电商辅账系统',
    description: '引望（原华为车BU）内部电商支付对账系统，实现银行交易数据接入、VBPS订单匹配、业务事件（BE）自动生成、银行收据（BR）全生命周期管理以及MetaERP过账，支撑端到端支付对账与应收款管理业务。',
    tags: ['Java 8', 'Spring Boot 2', 'MyBatis-Plus', 'OpenGauss', 'Redis', 'Redisson', '华为MQS', 'MapStruct'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=enterprise%20financial%20reconciliation%20system%20dashboard%20with%20bank%20transaction%20data%20modern%20UI%20design&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 2,
    name: 'CTA到款与核销系统',
    description: '华为资金安全专题企业级收款管理系统，基于DDD四层架构管理从银行流水接入、流水预处理、规则匹配、收款创建、审批工作流到ERP过账收款全生命周期。支持现金收款、杂项收款、票据收款三种业务类型。',
    tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'MyBatis-Plus', 'Redis', 'Redisson', 'Apache CXF', 'MapStruct', 'Drools'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=enterprise%20payment%20collection%20management%20system%20with%20workflow%20approval%20dashboard%20professional%20UI&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 3,
    name: '交易数据管线',
    description: '基于MQS消费者实现FFP对账文件接入，通过Redisson分布式锁保证消息幂等消费；开发暂存交易校验与正式交易生成流程，使用策略模式实现交易Split/Pad拆分/补齐逻辑，数据准确率高达100%。',
    tags: ['Java', 'MQS', 'Redisson', '策略模式', '幂等性'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20pipeline%20processing%20system%20with%20real-time%20data%20flow%20visualization%20dark%20theme&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 4,
    name: 'BE业务事件管理',
    description: '实现VBPS订单匹配、资金账号匹配及实时规则引擎调用，自动判定BE状态；开发BE认领、审核、发布、撤回全流程，支持单条与批量操作，集成企业内部门户代办通知。',
    tags: ['Java', '规则引擎', '工作流', '企业集成'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20event%20management%20system%20with%20workflow%20status%20tracking%20modern%20interface&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 5,
    name: 'BR收据管理与ERP过账',
    description: '开发收据创建、Starling工作流审批、MetaERP AR过账及冲销全链路；实现Excel批量导入收据、定时自动过账等功能，提升收据处理效率约80%。',
    tags: ['Java', 'MetaERP', 'Excel导入', '定时任务'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=receipt%20management%20system%20with%20ERP%20integration%20finance%20dashboard%20clean%20design&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 6,
    name: '规则引擎集成',
    description: '开发流水准入、流水解析、COA补录、到款校验四类业务规则，支持版本管理与审批流程；实现规则同步至LiveRule（Drools）引擎进行运行时评估，支持业务规则热更新。',
    tags: ['Java', 'Drools', 'LiveRule', '规则引擎', '热更新'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rules%20engine%20management%20system%20with%20rule%20editor%20and%20version%20control%20UI&image_size=landscape_16_9',
    link: '#'
  }
]

export const skills = [
  { name: 'Java 8/21', level: 95, category: '后端' },
  { name: 'Spring Boot', level: 92, category: '后端' },
  { name: 'Spring Cloud', level: 85, category: '后端' },
  { name: 'MyBatis-Plus', level: 88, category: '后端' },
  { name: 'Apache CXF', level: 78, category: '后端' },
  { name: 'OpenGauss', level: 80, category: '数据库' },
  { name: 'PostgreSQL', level: 85, category: '数据库' },
  { name: 'Redis/Redisson', level: 88, category: '数据库' },
  { name: 'Drools', level: 75, category: '规则引擎' },
  { name: 'MapStruct', level: 90, category: '工具' },
  { name: '华为MQS', level: 82, category: '消息队列' },
  { name: 'S3', level: 75, category: '存储' },
]

export const experiences = [
  {
    company: '引望（原华为车BU）',
    position: 'Java后端核心开发',
    period: '2025.09 - 至今',
    description: '负责ECA电商辅账系统和CTA到款与核销系统的核心开发，采用DDD四层架构+CQRS模式，对接MetaERP、EDM、iData等10+外部系统。'
  },
  {
    company: '某互联网公司',
    position: 'Java开发工程师',
    period: '2024.05 - 2025.09',
    description: '参与企业级后端系统开发，负责高并发场景处理、数据库优化、接口开发等工作。'
  }
]
