export default function Index() {
  const products = [
    {
      title: "公司介绍官网",
      url: "https://www.treescloud.cn/",
      description: "树科云境科技官方网站，展示公司业务、产品和服务",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/78085c6512fc2c439db215551843eddd2d233a00?width=464",
    },
    {
      title: "AI培训平台1.0",
      url: "https://www.yunjingai.net/",
      description: "专业的AI技术培训平台，提供系统化的人工智能学习课程",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9c633e2e7d4e28cb6a1965485a4c1de2743a69e6?width=464",
    },
    {
      title: "AI培训平台2.0",
      url: "https://peixun.yunjingai.net/",
      description: "全新升级的AI培训平台，提供更丰富的课程内容和学习体验",
      image: "/img/ai培训2.0.png",
    },
    {
      title: "招商平台2.0",
      url: "https://zsv2.yunjingai.net/",
      description: "全新升级的智能招商系统，提供更强大的数据分析和匹配能力",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/edf0e5a025f28e715a0227c326143118466420a6?width=464",
    },
    {
      title: "智能体应用平台",
      url: "https://agent.yunjingai.net/#/index",
      description: "AI智能体开发与应用平台，快速构建智能化业务应用",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/972432f0a3731d262f7952dfe2f32e3173949a4d?width=464",
    },
    {
      title: "双桥招商智能体",
      url: "http://yl.yinlanco.com/#/",
      description: "双桥区专属招商智能助手，提供本地化招商服务支持",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/50ce1e44c4edb7641043cad24813d3353def0614?width=464",
    },
    {
      title: "智能数据治理平台",
      url: "https://data.yunjingai.net/",
      description: "企业级数据治理解决方案，实现数据资产的统一管理和价值挖掘",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/33d4332b7fccfc2af9edf77ed3d179862ebfb501?width=464",
    },
    {
      title: "云境妙笔",
      url: "#",
      description: "智能写作助手平台，即将上线",
      image: "/img/placeholder.svg",
    },
    {
      title: "云境Markdown多格式互转软件",
      url: "https://toolonline.net/",
      description: "在线Markdown编辑器，支持Markdown与Word、HTML、PDF等多种格式的双向转换",
      image: "/img/Markdown.png",
    },
    {
      title: "奉节一期可视化平台",
      url: "http://123.146.82.142:9000/screen/#/login",
      description: "奉节项目数据可视化展示平台，实时呈现关键业务指标",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9caebdcdcbf70107599064017ff3d9ea6d9815df?width=464",
    },
    {
      title: "奉节二期可视化平台",
      url: "http://123.146.82.142:9000/p2/miniot-screen/#/login",
      description: "奉节二期升级版可视化系统，提供更丰富的数据洞察能力",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9caebdcdcbf70107599064017ff3d9ea6d9815df?width=464",
    },
  ];

  const firstRow = products.slice(0, 2);
  const rest = products.slice(2);

  const Card = ({ product }: { product: any }) => (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-card p-8 flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full sm:w-[232px] h-auto rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col justify-between min-w-0 flex-1">
        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-text-primary mb-3">
            {product.title}
          </h2>
          <p className="text-[14px] leading-[22px] font-normal text-gray-600 mb-3">
            {product.description}
          </p>
          <p className="text-[13px] leading-[20px] font-normal text-text-secondary break-all">
            {product.url}
          </p>
        </div>
        <button
          onClick={() => window.open(product.url, "_blank")}
          className="mt-6 w-fit px-6 py-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-[14px] leading-[20px] font-normal rounded-full shadow-button transition-all duration-300 hover:scale-105"
        >
          查看详情
        </button>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-16 mt-8">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="w-[62px] h-[62px] drop-shadow-lg"
            />
            <h1 className="text-[48px] leading-[48px] font-bold text-brand-primary tracking-[-1.2px] drop-shadow-md">
              树科云境产品合集
            </h1>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {firstRow.map((p, i) => (
              <Card key={i} product={p} />
            ))}
          </div>

          {/* Remaining Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rest.map((p, i) => (
              <Card key={i} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
