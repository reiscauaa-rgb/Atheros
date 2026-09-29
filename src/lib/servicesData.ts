export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  category: 'consular' | 'vistos' | 'legalizacao' | 'procuracoes' | 'enotariado';
  icon: string;
  badge: string;
  title: string;
  seoTitle: string;
  subtitle: string;
  metaDescription: string;
  keywords: string;
  intro: string;
  whyNeeded: {
    title: string;
    description: string;
    points: string[];
  };
  useCases: {
    title: string;
    items: string[];
  };
  requiredDocs: {
    title: string;
    items: string[];
  };
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  faqs: ServiceFAQ[];
  warning?: string;
  whatsappMessage: string;
}

export const servicesData: {
  pt: Record<string, ServiceDetail>;
  en: Record<string, ServiceDetail>;
} = {
  pt: {
    'apostilamento-de-haia': {
      slug: 'apostilamento-de-haia',
      category: 'legalizacao',
      icon: '📜',
      badge: 'Legalização Internacional',
      title: 'Apostilamento de Haia nos EUA',
      seoTitle: 'Apostilamento de Haia nos EUA para Documentos no Brasil',
      subtitle: 'Validação oficial de documentos emitidos nos Estados Unidos para que tenham pleno valor legal no Brasil.',
      metaDescription: 'Assessoria especializada em Apostilamento de Haia para brasileiros nos EUA. Valide certidões americanas, diplomas e sentenças para uso no Brasil sem burocracia.',
      keywords: 'apostilamento de haia nos eua, apostilar documento americano brasil, hague apostille massachusetts, legalização consular certidão americana, certidão de nascimento americana no brasil',
      intro: 'O Apostilamento da Convenção de Haia é o certificado internacional que atesta a autenticidade de documentos públicos emitidos nos Estados Unidos, permitindo que eles sejam aceitos diretamente em cartórios, tribunais, universidades e órgãos públicos no Brasil, sem a necessidade de legalização consular antiga.',
      whyNeeded: {
        title: 'Por que o Apostilamento de Haia é indispensável?',
        description: 'Pela legislação brasileira, nenhum documento emitido no exterior possui validade legal automática no Brasil sem o selo da Convenção de Haia (Decreto Federal nº 8.660/2016). Sem o apostilamento:',
        points: [
          'Cartórios brasileiros não podem registrar filhos de brasileiros nascidos nos EUA.',
          'Casamentos realizados em solo americano não podem ser transcritos no Brasil.',
          'Diplomas e históricos escolares americanos não são reconhecidos pelo MEC ou universidades brasileiras.',
          'Sentenças de divórcio emitidas por cortes americanas não podem ser homologadas perante o Superior Tribunal de Justiça (STJ).',
        ],
      },
      useCases: {
        title: 'Principais documentos que apostilamos nos EUA',
        items: [
          'Certidões de nascimento, casamento e óbito americanas (Birth, Marriage & Death Certificates)',
          'Diplomas universitários, certificados de conclusão e históricos escolares (Transcripts)',
          'Sentenças judiciais de divórcio e guarda de menores emitidas por cortes americanas',
          'Declarações notariais e procurações americanas (Notary Public)',
          'Relatórios de antecedentes criminais estaduais e do FBI',
          'Documentos societários, atas e contratos empresariais dos EUA',
        ],
      },
      requiredDocs: {
        title: 'O que você precisa nos enviar para análise',
        items: [
          'Cópia digital ou original do documento americano a ser apostilado (conforme a exigência da secretaria de estado competente)',
          'Identificação do solicitante (Passaporte brasileiro ou RG)',
          'Informação do município/órgão destinatário no Brasil para verificação de requisitos adicionais',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Análise Prévia Gratuita',
          description: 'Você nos envia a foto ou PDF do documento. Verificamos se ele possui a assinatura e o selo notarial/oficial exigido pelo estado americano emissor.',
        },
        {
          number: 2,
          title: 'Tramitação perante a Autoridade Competente',
          description: 'Submetemos o documento diretamente ao órgão oficial competente (Secretaria de Estado / Department of State) para aposição da apostila física e digital.',
        },
        {
          number: 3,
          title: 'Tradução Juramentada Integrada (Opcional)',
          description: 'Se o órgão no Brasil exigir tradução, já encaminhamos o documento apostilado para nossa equipe de tradutores juramentados credenciados.',
        },
        {
          number: 4,
          title: 'Entrega Segura',
          description: 'Entregamos o documento pronto em mãos em nosso escritório em Stoughton/MA ou enviamos com rastreamento seguro para qualquer endereço nos EUA ou no Brasil.',
        },
      ],
      faqs: [
        {
          question: 'Onde é feito o apostilamento nos Estados Unidos?',
          answer: 'O apostilamento é emitido pela Secretaria de Estado (Secretary of State) do estado onde o documento foi emitido ou notarizado, ou pelo Departamento de Estado dos EUA (no caso de documentos federais como o FBI). A Atheros cuida de toda essa logística para você.',
        },
        {
          question: 'Preciso apostilar antes ou depois de traduzir?',
          answer: 'Sempre antes! O documento original em inglês deve ser apostilado nos EUA primeiro. Em seguida, a tradução juramentada no Brasil inclui a tradução do texto do documento e da própria apostila.',
        },
        {
          question: 'Quanto tempo demora para apostilar um documento?',
          answer: 'O prazo varia conforme o estado de emissão do documento, normalmente entre 3 a 10 dias úteis. Com a assessoria da Atheros, evitamos devoluções por inconsistência cadastral que podem atrasar o processo por semanas.',
        },
        {
          question: 'Certidão emitida há muito tempo pode ser apostilada?',
          answer: 'Muitos estados americanos e cartórios brasileiros exigem certidões emitidas recentemente (geralmente nos últimos 3 a 6 meses). Nós conferimos a data da sua certidão antes de dar entrada para que você não gaste dinheiro à toa.',
        },
      ],
      warning: 'Atenção: Cartórios brasileiros não aceitam cópias simples nem documentos sem o carimbo oficial da Apostila de Haia. Nossa análise prévia evita que seu processo no Brasil seja cancelado ou atrasado.',
      whatsappMessage: 'Olá! Vim pelo site da Atheros e gostaria de um orçamento para Apostilamento de Haia de documentos americanos.',
    },

    'traducoes': {
      slug: 'traducoes',
      category: 'legalizacao',
      icon: '🌐',
      badge: 'Traduções Oficiais',
      title: 'Traduções Certificadas nos EUA & Juramentadas no Brasil',
      seoTitle: 'Traduções Certificadas nos EUA e Juramentadas no Brasil',
      subtitle: 'Traduções oficiais aceitas pelo USCIS, tribunais e universidades americanas, bem como por cartórios e órgãos no Brasil.',
      metaDescription: 'Serviço de tradução certificada nos EUA (USCIS, DMV, universidades) e tradução juramentada no Brasil (cartórios, Receita Federal, bancos). 100% de aceitação garantida.',
      keywords: 'tradução certificada eua, tradução juramentada brasil, tradução juramentada nos eua, sworn translation brasil, tradução para uscis, tradução certidão nascimento eua',
      intro: 'Documentos em português não são aceitos diretamente por órgãos americanos, assim como documentos em inglês não têm validade em repartições brasileiras sem a devida tradução oficial. A Atheros oferece assessoria completa para as duas modalidades de tradução com total garantia de aceitação.',
      whyNeeded: {
        title: 'Qual a diferença entre Tradução Certificada e Juramentada?',
        description: 'Cada país possui seu próprio sistema de validação linguística:',
        points: [
          'Tradução Certificada nos EUA (Certified Translation): Exigida nos EUA pelo USCIS (imigração), NVC, cortes de família, universidades, DMV e bancos. É acompanhada de uma Certificate of Accuracy assinada pelo tradutor responsável.',
          'Tradução Juramentada no Brasil (Sworn Translation): Exigida no Brasil por cartórios de registro civil, tabelionatos, tribunais, Receita Federal e bancos. Deve ser realizada exclusivamente por Tradutor Público e Intérprete Comercial matriculado na Junta Comercial.',
        ],
      },
      useCases: {
        title: 'Documentos mais traduzidos',
        items: [
          'Certidões de nascimento, casamento e divórcio para processos no USCIS (Green Card, cidadania)',
          'Antecedentes criminais da Polícia Federal brasileira e atestados de bons antecedentes',
          'Históricos escolares e diplomas brasileiros para equivalência de estudos nos EUA (WES, etc.)',
          'Certidões de nascimento americanas para transcrição em cartório no Brasil',
          'Declarações de imposto de renda (IRS) e contracheques para comprovação de renda no Brasil',
          'Extratos bancários e cartas de recomendação',
        ],
      },
      requiredDocs: {
        title: 'Como solicitar um orçamento de tradução',
        items: [
          'Foto nítida ou arquivo PDF legível de todas as páginas e versos do documento',
          'Informação de onde a tradução será apresentada (EUA ou Brasil)',
          'Prazo desejado para conclusão',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Envio dos Documentos',
          description: 'Você nos envia os documentos digitalizados por WhatsApp ou e-mail. Fazemos a contagem exata de laudas ou palavras.',
        },
        {
          number: 2,
          title: 'Orçamento Rápido e Transparente',
          description: 'Apresentamos o valor fechado e o prazo exato de entrega, sem taxas ocultas.',
        },
        {
          number: 3,
          title: 'Tradução por Especialista Habilitado',
          description: 'O documento é traduzido com terminologia jurídica precisa e revisado minuciosamente.',
        },
        {
          number: 4,
          title: 'Emissão do Certificado e Envio',
          description: 'Entregamos em formato digital com assinatura eletrônica aceita nacional e internacionalmente, ou via correio expresso com cópias impressas.',
        },
      ],
      faqs: [
        {
          question: 'O USCIS aceita a tradução da Atheros?',
          answer: 'Sim, 100%! Nossas traduções certificadas seguem rigorosamente as diretrizes federais do Código de Regulamentações Federais dos EUA (8 CFR 103.2(b)(3)), incluindo a Declaração de Competência e Precisão (Certificate of Translation).',
        },
        {
          question: 'Posso eu mesmo traduzir meus documentos para o USCIS?',
          answer: 'Embora o regulamento exija apenas que o tradutor ateste sua fluência, fazer a própria tradução é amplamente desaconselhado por advogados de imigração, pois gera suspeita de conflito de interesses e erros de jargão jurídico que provocam RFE (Request for Evidence).',
        },
        {
          question: 'A tradução para o Brasil é aceita em qualquer cartório?',
          answer: 'Sim. Nossas traduções juramentadas para uso no Brasil têm fé pública e validade nacional perante todos os cartórios e órgãos públicos do país.',
        },
      ],
      warning: 'Erros de grafia em nomes, datas ou termos jurídicos na tradução podem travar processos de imigração ou inventários por meses. Conte com especialistas.',
      whatsappMessage: 'Olá! Vim pelo site da Atheros e gostaria de um orçamento para tradução de documentos.',
    },

    'vistos': {
      slug: 'vistos',
      category: 'vistos',
      icon: '✈️',
      badge: 'Vistos e Entrada no Brasil',
      title: 'Assessoria de Vistos para o Brasil (e-Visa e VIVIS)',
      seoTitle: 'Assessoria de Vistos para o Brasil: e-Visa e VIVIS nos EUA',
      subtitle: 'Auxílio completo para estrangeiros e cidadãos com dupla nacionalidade que precisam entrar ou permanecer no Brasil.',
      metaDescription: 'Assessoria especializada para obtenção de visto para o Brasil nos EUA: e-Visa para americanos e canadenses, vistos de visita (VIVIS) e dupla nacionalidade.',
      keywords: 'visto brasil para americanos, e-visa brasil 2026, visto de visitante brasil, visto turista brasil, assessoria visto brasil boston, tirar visto para o brasil',
      intro: 'Com as mudanças nas exigências de reciprocidade diplomática do governo brasileiro, cidadãos de países como Estados Unidos, Canadá e Austrália necessitam de visto de entrada no território nacional. A Atheros cuida de todo o processo de assessoria para garantir a autorização de viagem correta e sem transtornos no embarque.',
      whyNeeded: {
        title: 'Por que contar com assessoria para o Visto Brasileiro?',
        description: 'O sistema consular brasileiro é rigoroso com especificações técnicas e formulários:',
        points: [
          'Fotos fora do padrão biométrico internacional ICAO causam recusa imediata de solicitações de e-Visa.',
          'Erros de preenchimento nos formulários consulares podem resultar em cancelamento da taxa consular paga (não reembolsável).',
          'Famílias com filhos americanos de pais brasileiros precisam de orientação precisa sobre emissão de visto vs. registro de nascimento consular.',
          'Atrasos na emissão podem impedir o embarque na companhia aérea no aeroporto.',
        ],
      },
      useCases: {
        title: 'Modalidades de Vistos que assessoramos',
        items: [
          'e-Visa para cidadãos americanos (Visto eletrônico 100% online)',
          'e-Visa para cidadãos canadenses e australianos',
          'VIVIS (Visto de Visita) para turismo, negócios, trânsito ou visitas familiares',
          'Visto para dependentes e familiares de brasileiros',
          'Orientação para filhos de brasileiros nascidos nos EUA (Regularização de nacionalidade vs. Visto)',
        ],
      },
      requiredDocs: {
        title: 'Documentos geralmente exigidos',
        items: [
          'Passaporte americano/estrangeiro válido por no mínimo 6 meses com páginas livres',
          'Foto digital recente em fundo branco dentro do padrão consular (2x2 polegadas)',
          'Comprovante de reserva de passagem aérea de ida e volta (ou itinerário)',
          'Comprovante de residência nos Estados Unidos',
          'Para menores de 18 anos: autorização dos pais (Consent Form) e certidão de nascimento',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Verificação da Situação do Viajante',
          description: 'Avaliamos a nacionalidade, o objetivo da viagem, os vínculos com o Brasil e a data do voo para definir a modalidade correta.',
        },
        {
          number: 2,
          title: 'Organização e Conferência de Documentos',
          description: 'Ajustamos fotos, conferimos passaportes e preparamos toda a documentação comprobatória.',
        },
        {
          number: 3,
          title: 'Preenchimento e Submissão Oficial',
          description: 'Preenchemos o formulário oficial do governo brasileiro, anexamos os arquivos nos padrões exigidos e emitimos as guias de pagamento.',
        },
        {
          number: 4,
          title: 'Acompanhamento até a Emissão',
          description: 'Monitoramos o status consular diariamente até o envio do visto aprovado pronto para viagem.',
        },
      ],
      faqs: [
        {
          question: 'Americanos precisam de visto para o Brasil?',
          answer: 'Sim, o governo brasileiro restabeleceu a exigência de visto de entrada para portadores de passaporte dos EUA, Canadá e Austrália. O visto pode ser obtido eletronicamente (e-Visa).',
        },
        {
          question: 'Meu filho nasceu nos EUA, ele precisa de visto ou de passaporte brasileiro?',
          answer: 'Filho de pai ou mãe brasileira tem direito à nacionalidade brasileira originária. A melhor opção geralmente é lavrar a Certidão de Nascimento Consular e emitir o passaporte brasileiro para que ele ingresse no país como cidadão nacional. A Atheros faz os dois processos e orienta você sobre a melhor decisão.',
        },
        {
          question: 'Qual a validade do e-Visa para cidadãos americanos?',
          answer: 'O e-Visa para cidadãos americanos normalmente tem validade de até 10 anos, permitindo estadias de até 90 dias por ano (prorrogáveis perante a Polícia Federal no Brasil).',
        },
      ],
      whatsappMessage: 'Olá! Vim pelo site da Atheros e gostaria de assessoria para visto de entrada no Brasil.',
    },

    'vitem-xi': {
      slug: 'vitem-xi',
      category: 'vistos',
      icon: '👨‍👩‍👧‍👦',
      badge: 'Reunificação Familiar',
      title: 'Visto VITEM XI: Reunificação Familiar no Brasil',
      seoTitle: 'Visto VITEM XI - Reunificação Familiar no Brasil | Atheros',
      subtitle: 'Assessoria completa para estrangeiros casados ou unidos a brasileiros que desejam residir legalmente no Brasil.',
      metaDescription: 'Tudo sobre o Visto VITEM XI de Reunificação Familiar para o Brasil. Assessoria com certidões apostiladas, FBI background check e trâmite consular completo.',
      keywords: 'visto vitem xi brasil, reunificacao familiar brasil, visto conjuge brasil, visto companheiro brasil, vitem 11 consulado brasileiro, visto morar no brasil conjuge',
      intro: 'O Visto Temporário XI (VITEM XI) é a modalidade criada pela legislação migratória brasileira para permitir que cônjuges, companheiros em união estável, filhos, pais ou dependentes estrangeiros de cidadãos brasileiros possam se mudar e viver legalmente no Brasil com plenos direitos de residência e trabalho.',
      whyNeeded: {
        title: 'Por que o VITEM XI exige assessoria especializada?',
        description: 'O processo de reunificação familiar é um dos mais rigorosos da rede consular brasileira:',
        points: [
          'Exige a apresentação de atestados de antecedentes criminais estaduais e federais (FBI Background Check) com Apostilamento de Haia e tradução juramentada.',
          'Casamentos ocorridos nos EUA precisam estar previamente registrados no Consulado Brasileiro ou transcritos em cartório no Brasil.',
          'Uniões estáveis exigem farta comprovação documental (contas conjuntas, declarações notariais, histórico de convivência pública e contínua).',
          'Documentos com mais de 90 dias ou com qualquer divergência de nomes provocam a paralisação do processo consular.',
        ],
      },
      useCases: {
        title: 'Quem tem direito ao Visto VITEM XI?',
        items: [
          'Cônjuge estrangeiro casado legalmente com cidadão(ã) brasileiro(a)',
          'Companheiro(a) estrangeiro(a) em união estável comprovada com brasileiro(a)',
          'Filhos estrangeiros de cidadão brasileiro (que não optem pela nacionalidade)',
          'Pais estrangeiros de filhos brasileiros natos ou naturalizados',
          'Irmãos ou netos estrangeiros sob tutela ou dependência econômica de brasileiro',
        ],
      },
      requiredDocs: {
        title: 'Documentos essenciais para o VITEM XI',
        items: [
          'Passaporte estrangeiro válido do solicitante',
          'Certidão Consular de Casamento brasileira (ou certidão de casamento americana com Apostila de Haia e tradução)',
          'Documento de identidade brasileiro do chamante (Passaporte ou RG)',
          'Atestado de Antecedentes Criminais do FBI apostilado nos EUA',
          'Comprovante de residência nos EUA',
          'Termo de responsabilidade e subsistência assinado pelo brasileiro',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Diagnóstico do Vínculo Familiar',
          description: 'Avaliamos a situação matrimonial do casal (casamento civil nos EUA ou união estável) e definimos se é necessário pré-registrar o casamento no consulado.',
        },
        {
          number: 2,
          title: 'Orientação e Coleta de Antecedentes e Apostilamentos',
          description: 'Instruímos a coleta de digitais para o FBI, providenciamos o apostilamento de Haia e as traduções juramentadas obrigatórias.',
        },
        {
          number: 3,
          title: 'Montagem do Dossiê Consular',
          description: 'Preparamos o formulário RER, anexamos as declarações juramentadas e organizamos o dossiê conforme os padrões rígidos do consulado.',
        },
        {
          number: 4,
          title: 'Agendamento e Emissão do Visto',
          description: 'Submetemos o processo, orientamos a entrega ou comparecimento ao consulado e acompanhamos até a estampagem do visto no passaporte.',
        },
      ],
      faqs: [
        {
          question: 'O VITEM XI dá direito a trabalhar no Brasil?',
          answer: 'Sim! Uma vez concedido o VITEM XI e registrado perante a Polícia Federal no Brasil para emissão da Carteira de Registro Nacional Migratório (CRNM), o titular estrangeiro pode trabalhar regularmente e exercer qualquer atividade econômica no país.',
        },
        {
          question: 'Podemos dar entrada no VITEM XI já estando no Brasil?',
          answer: 'Sim, existe o processo de Autorização de Residência diretamente na Polícia Federal no Brasil, mas o VITEM XI emitido ainda nos EUA pelo Consulado Brasileiro é muito mais rápido e permite que o estrangeiro chegue ao Brasil já com status regularizado.',
        },
        {
          question: 'União estável feita nos EUA é aceita para o VITEM XI?',
          answer: 'Sim, desde que devidamente documentada e reconhecida conforme as exigências do Consulado Geral do Brasil. Nossa equipe orienta exatamente quais documentos comprobatórios são exigidos.',
        },
      ],
      warning: 'Não envie documentos incompletos ou sem a devida Apostila de Haia. O consulado brasileiro não analisa processos com falhas na documentação criminal ou civil.',
      whatsappMessage: 'Olá! Vim pelo site da Atheros e gostaria de assessoria para o visto VITEM XI de reunificação familiar.',
    },

    'passaporte': {
      slug: 'passaporte',
      category: 'consular',
      icon: '🛂',
      badge: 'Assessoria Consular',
      title: 'Passaportes Brasileiros e Serviços Consulares nos EUA',
      seoTitle: 'Passaporte Brasileiro nos EUA e Serviços Consulares | Atheros',
      subtitle: 'Emissão e renovação de passaportes, certidões civis, CPF e documentos consulares com rapidez e sem estresse.',
      metaDescription: 'Renovação de passaporte brasileiro nos EUA com agilidade. Assessoria para certidões de nascimento, casamento, autorização de viagem e alistamento militar.',
      keywords: 'passaporte brasileiro eua, renovar passaporte brasileiro massachusetts, agendamento consulado boston, certidao consular eua, autorização viagem menor brasil eua',
      intro: 'O passaporte brasileiro é o documento indispensável para a manutenção dos seus direitos civis e sua liberdade de viajar. A Atheros simplifica todo o procedimento burocrático junto aos consulados brasileiros nos Estados Unidos, evitando que você perca viagens ou tenha seu pedido negado por erros de preenchimento ou pendências eleitorais.',
      whyNeeded: {
        title: 'Por que fazer seu passaporte com a Atheros?',
        description: 'Procedimentos consulares frequentemente geram dúvidas e frustrações:',
        points: [
          'Pendências na Justiça Eleitoral ou no serviço militar impedem a emissão do passaporte.',
          'Divergências na grafia de nomes em certidões antigas travam os pedidos consulares.',
          'Menores de idade exigem formulários específicos de autorização com reconhecimento de firma por ambos os genitores.',
          'Com nossa análise prévia, você não perde a taxa consular paga nem tempo de espera em filas ou agendamentos.',
        ],
      },
      useCases: {
        title: 'Serviços consulares atendidos',
        items: [
          'Renovação de passaporte para adultos (com ou sem validade vencida)',
          'Emissão de primeiro passaporte e renovação para menores de 18 anos',
          'Registro de nascimento de filhos de brasileiros nascidos nos Estados Unidos',
          'Registro consular de casamento realizado nos EUA',
          'Regularização do Título de Eleitor no exterior (transferência e quitação eleitoral)',
          'Alistamento e dispensa militar para jovens brasileiros no exterior',
          'Autorização de viagem para menores desacompanhados',
          'Atestado de Residência e Atestado de Vida para INSS',
        ],
      },
      requiredDocs: {
        title: 'Documentos básicos para passaporte',
        items: [
          'Passaporte brasileiro anterior (original)',
          'Certidão brasileira (nascimento ou casamento com averbação se casado/divorciado)',
          'Documento de identidade brasileiro com foto (RG, CNH válida)',
          'Foto recente nos padrões biométricos consulares',
          'Comprovante de quitação eleitoral (ajudamos a regularizar se houver pendência)',
          'Para homens entre 18 e 45 anos: documento militar',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Triagem e Verificação Cadastral',
          description: 'Analisamos seus documentos e checamos previamente seu CPF, situação eleitoral e militar.',
        },
        {
          number: 2,
          title: 'Preenchimento do RER e Upload',
          description: 'Preenchemos o formulário oficial no sistema E-Consular com validação rigorosa de cada anexo.',
        },
        {
          number: 3,
          title: 'Envio ou Agendamento Consular',
          description: 'Cuidamos do agendamento presencial ou da montagem do pacote postal com envelope de retorno seguro.',
        },
        {
          number: 4,
          title: 'Acompanhamento do Pedido',
          description: 'Monitoramos a confecção do passaporte até que ele esteja emitido e em suas mãos.',
        },
      ],
      faqs: [
        {
          question: 'Meu passaporte venceu há anos, ainda posso renovar?',
          answer: 'Sim, o passaporte vencido pode ser renovado a qualquer tempo. Ele serve como comprovação da sua nacionalidade brasileira juntamente com sua certidão de nascimento ou casamento.',
        },
        {
          question: 'Preciso ir pessoalmente ao consulado?',
          answer: 'Para muitos serviços e jurisdições, os consulados aceitam o processo via correio (Mail-in). A Atheros instrui e prepara todo o pacote com etiquetas rastreadas para você não precisar se deslocar.',
        },
        {
          question: 'Não votei nas últimas eleições, consigo tirar passaporte?',
          answer: 'A quitação eleitoral é obrigatória para maiores de 18 anos. Nós auxiliamos você a justificar a ausência eleitoral ou transferir seu título para a jurisdição do exterior antes da emissão do passaporte.',
        },
      ],
      whatsappMessage: 'Olá! Vim pelo site da Atheros e gostaria de ajuda para renovar meu passaporte brasileiro.',
    },

    'procuracoes': {
      slug: 'procuracoes',
      category: 'procuracoes',
      icon: '📋',
      badge: 'Poder Legal a Distância',
      title: 'Procurações Públicas para Brasileiros nos EUA',
      seoTitle: 'Procuração Pública para Brasileiros nos EUA | Atheros',
      subtitle: 'Nomeie representantes de confiança no Brasil para venda de imóveis, bancos, INSS e inventários com segurança jurídica.',
      metaDescription: 'Elaboração e assessoria de Procurações Públicas para brasileiros nos EUA. Para venda de imóveis, contas bancárias, inventário e representação no Brasil.',
      keywords: 'procuração pública consulado eua, procuração venda imóvel brasil, procuração banco inss eua, procurador no brasil, procuração pública stoughton ma',
      intro: 'A procuração pública é o instrumento legal que confere a outra pessoa poderes para agir em seu nome no Brasil. Por envolver atos de grande impacto patrimonial e financeiro, a redação precisa das cláusulas de poderes é fundamental para evitar que cartórios, bancos e órgãos brasileiros recusem o documento.',
      whyNeeded: {
        title: 'Por que o texto da procuração precisa de assessoria especializada?',
        description: 'Cartórios e bancos no Brasil são extremamente exigentes quanto aos poderes expressos:',
        points: [
          'Venda e compra de imóveis exigem descrição registral completa do bem e poderes específicos expressos.',
          'Movimentações bancárias, encerramento de contas e PIX exigem menção explícita às instituições e operações permitidas.',
          'Inventários e partilha de bens exigem poderes para concordar ou discordar de quinhões e renunciar herança se for o caso.',
          'Uma vírgula ou termo genérico na procuração pode fazer o cartório brasileiro rejeitar a escritura, obrigando a refazer todo o processo.',
        ],
      },
      useCases: {
        title: 'Principais tipos de procurações elaboradas',
        items: [
          'Venda, compra, doação e escrituração de imóveis no Brasil',
          'Movimentação de contas bancárias, abertura e encerramento de contas',
          'Representação perante o INSS para aposentadoria, pensão e prova de vida',
          'Inventários judiciais e extrajudiciais (em cartório)',
          'Matrícula e transferência escolar/universitária de dependentes',
          'Divórcio consensual e partilha de bens',
          'Representação perante a Receita Federal do Brasil',
        ],
      },
      requiredDocs: {
        title: 'Documentos necessários do outorgante e outorgado',
        items: [
          'Documento de identificação do mandante (Passaporte brasileiro ou RG) e CPF',
          'Certidão de casamento se for casado(a) — na venda de imóveis, a outorga uxória/marital é obrigatória',
          'Dados completos do procurador no Brasil (nome, nacionalidade, estado civil, profissão, RG, CPF e endereço)',
          'Informações detalhadas do bem ou processo (ex: número da matrícula do imóvel, dados da conta bancária)',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Entendimento da Finalidade',
          description: 'Conversamos com você para entender exatamente qual transação será realizada no Brasil.',
        },
        {
          number: 2,
          title: 'Redação Jurídica Personalizada',
          description: 'Redigimos a minuta com todas as cláusulas e poderes específicos demandados pelo cartório ou banco no Brasil.',
        },
        {
          number: 3,
          title: 'Definição da Via Adequada',
          description: 'Orientamos se o procedimento será formalizado via Consulado Brasileiro, via Notary Public com Apostila de Haia ou via e-Notariado.',
        },
        {
          number: 4,
          title: 'Conferência e Finalização',
          description: 'Acompanhamos a assinatura e validação do documento para que chegue com plena eficácia jurídica ao Brasil.',
        },
      ],
      faqs: [
        {
          question: 'Qual a diferença entre procuração pública e particular?',
          answer: 'A procuração pública é lavrada em livro próprio de consulado ou cartório e é obrigatória por lei para negócios imobiliários, inventários, casamento e certos atos bancários. A particular só serve para atos simples e não é aceita para venda de imóveis.',
        },
        {
          question: 'Sou casado nos EUA, meu cônjuge precisa assinar a procuração para venda de imóvel?',
          answer: 'Sim, pela legislação brasileira (salvo no regime de separação absoluta de bens), a alienação de bens imóveis exige o consentimento expresso do cônjuge (outorga uxória/marital). A Atheros redige a procuração conjunta para que ambos assinem corretamente.',
        },
        {
          question: 'A procuração tem prazo de validade?',
          answer: 'Salvo quando estipulado prazo específico na minuta, a procuração tem validade indeterminada até ser revogada, ou cessa por morte ou interdição das partes. Alguns bancos no Brasil exigem procurações emitidas há menos de 1 ou 2 anos.',
        },
      ],
      warning: 'Procurações mal redigidas ou com poderes genéricos são a maior causa de atraso em transações imobiliárias no Brasil. Nossa redação especializada garante aceitação imediata.',
      whatsappMessage: 'Olá! Vim pelo site da Atheros e gostaria de orientação para fazer uma procuração pública.',
    },

    'enotariado': {
      slug: 'enotariado',
      category: 'enotariado',
      icon: '🔐',
      badge: 'Cartório Digital',
      title: 'e-Notariado para Brasileiros no Exterior',
      seoTitle: 'e-Notariado nos EUA: Atos Notariais 100% Online | Atheros',
      subtitle: 'Realize atos notariais diretamente com cartórios brasileiros por videoconferência, sem precisar se deslocar até o consulado.',
      metaDescription: 'Assessoria para e-Notariado para brasileiros nos EUA. Faça procurações, escrituras e reconhecimento de firma online por videoconferência com cartórios do Brasil.',
      keywords: 'enotariado eua, cartorio digital brasil exterior, procuracao enotariado eua, certificado digital enotariado, atos notariais eletronicos exterior',
      intro: 'O e-Notariado é a plataforma oficial regulamentada pelo Conselho Nacional de Justiça (CNJ) que conecta cidadãos a cartórios de notas de todo o Brasil. Com ela, brasileiros vivendo nos Estados Unidos podem assinar procurações públicas, escrituras e documentos notariais de forma 100% eletrônica e segura, por meio de videoconferência.',
      whyNeeded: {
        title: 'Quais as vantagens do e-Notariado?',
        description: 'O e-Notariado revolucionou o acesso aos serviços cartorários para quem está fora do Brasil:',
        points: [
          'Não depende de agendamento presencial no consulado nem de filas.',
          'O Certificado Digital Notarizado é emitido de forma remota e gratuita pelo próprio cartório credenciado.',
          'Assinatura digital com validade jurídica idêntica à assinatura física com firma reconhecida no Brasil.',
          'Processo rápido: muitas procurações são concluídas em poucos dias úteis.',
        ],
      },
      useCases: {
        title: 'O que pode ser feito pelo e-Notariado',
        items: [
          'Procurações públicas para venda de imóveis, bancos, inventários e INSS',
          'Escrituras públicas de compra e venda e doação de bens',
          'Divórcio consensual em cartório (sem filhos menores ou incapazes)',
          'Dissolução e formalização de união estável',
          'Atas notariais e reconhecimento de assinatura eletrônica',
          'Autorizações eletrônicas de viagem de menores',
        ],
      },
      requiredDocs: {
        title: 'Requisitos para utilizar a plataforma',
        items: [
          'Documento de identidade brasileiro recente com foto (RG ou CNH)',
          'CPF regular perante a Receita Federal',
          'Smartphone com câmera e internet para o aplicativo do e-Notariado',
          'Comprovante de residência nos EUA',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Análise de Compatibilidade',
          description: 'Avaliamos se o ato notarial que você precisa realizar é compatível com o sistema e-Notariado e indicamos o cartório competente.',
        },
        {
          number: 2,
          title: 'Emissão do Certificado Digital Notarizado',
          description: 'Ajudamos você a instalar o aplicativo oficial e realizamos a validação de identidade remota com o cartório credenciado.',
        },
        {
          number: 3,
          title: 'Elaboração e Revisão da Minuta',
          description: 'Preparamos a minuta da procuração ou escritura junto ao tabelião para garantir que contenha todos os poderes necessários.',
        },
        {
          number: 4,
          title: 'Videoconferência e Assinatura',
          description: 'Acompanhamos a sessão de videoconferência com o tabelião e a aposição da sua assinatura digital. O traslado eletrônico é gerado na hora.',
        },
      ],
      faqs: [
        {
          question: 'O certificado digital do e-Notariado é pago?',
          answer: 'Não! O Certificado Digital Notarizado emitido pelos cartórios na plataforma e-Notariado é gratuito para o cidadão e fica armazenado de forma segura no seu celular.',
        },
        {
          question: 'Qualquer cartório no Brasil pode fazer o e-Notariado para quem está no exterior?',
          answer: 'O provimento do CNJ estabelece regras de competência territorial (geralmente o cartório do último domicílio do outorgante no Brasil ou do local do imóvel). A Atheros identifica o cartório correto para que o ato não seja invalidado.',
        },
        {
          question: 'É necessária procuração presencial se eu já tiver o e-Notariado?',
          answer: 'Não! O documento lavrado pelo e-Notariado é um documento público com assinatura ICP-Brasil ou notarizada de plena validade jurídica em qualquer repartição ou instituição financeira do país.',
        },
      ],
      whatsappMessage: 'Olá! Vim pelo site da Atheros e gostaria de assessoria para utilizar o e-Notariado nos EUA.',
    },
  },

  en: {
    'apostilamento-de-haia': {
      slug: 'apostilamento-de-haia',
      category: 'legalizacao',
      icon: '📜',
      badge: 'International Legalization',
      title: 'Hague Apostille in the USA',
      seoTitle: 'Hague Apostille in the USA for Use in Brazil | Atheros',
      subtitle: 'Official validation of documents issued in the United States so that they have full legal validity in Brazil.',
      metaDescription: 'Specialized Hague Apostille advisory for Brazilians in the USA. Validate American certificates, diplomas and court orders for use in Brazil hassle-free.',
      keywords: 'hague apostille usa, apostille american document brazil, apostille massachusetts, consular legalization us certificates',
      intro: 'The Hague Apostille Convention certificate verifies the authenticity of public documents issued in the United States, allowing them to be directly accepted by notary offices, courts, universities and government agencies in Brazil without traditional consular legalization.',
      whyNeeded: {
        title: 'Why is the Hague Apostille essential?',
        description: 'Under Brazilian law, no foreign document has automatic legal validity in Brazil without the Hague Apostille stamp (Federal Decree 8,660/2016). Without it:',
        points: [
          'Brazilian civil registries cannot register children born to Brazilian parents in the US.',
          'US marriage certificates cannot be transcribed into Brazilian civil registries.',
          'American diplomas and academic transcripts are not recognized by the Ministry of Education (MEC) or Brazilian universities.',
          'Divorce decrees issued by US courts cannot be validated by Brazil\'s Superior Court of Justice (STJ).',
        ],
      },
      useCases: {
        title: 'Key US documents we apostille',
        items: [
          'American Birth, Marriage, and Death Certificates',
          'University diplomas, degree certificates and academic transcripts',
          'US divorce decrees and child custody judgments',
          'Notarized affidavits and powers of attorney (Notary Public)',
          'State police certificates and FBI Identity History Summary Checks',
          'Corporate documents, articles of incorporation and US business contracts',
        ],
      },
      requiredDocs: {
        title: 'What to send us for analysis',
        items: [
          'Digital copy or original US document to be apostilled (depending on state requirements)',
          'Requester identification (Passport or Brazilian ID)',
          'Destination municipality or agency in Brazil for specific requirement checks',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Free Preliminary Analysis',
          description: 'Send us a photo or PDF. We verify that it has the required notary/official seal mandated by the issuing US state.',
        },
        {
          number: 2,
          title: 'Filing with Competent Authority',
          description: 'We submit the document directly to the Secretary of State or US Department of State for the apostille seal.',
        },
        {
          number: 3,
          title: 'Integrated Sworn Translation (Optional)',
          description: 'If the Brazilian agency requires translation, we route the apostilled document directly to certified sworn translators.',
        },
        {
          number: 4,
          title: 'Secure Delivery',
          description: 'Hand delivery at our Stoughton, MA office or tracked courier shipping to any address in the US or Brazil.',
        },
      ],
      faqs: [
        {
          question: 'Where is the apostille issued in the USA?',
          answer: 'The apostille is issued by the Secretary of State of the state where the document was issued or notarized, or by the US Department of State for federal documents (like FBI checks). Atheros manages all logistics for you.',
        },
        {
          question: 'Should I apostille before or after translating?',
          answer: 'Always before! The original English document must receive the Hague Apostille in the US first. Then the Brazilian sworn translation covers both the original text and the apostille certificate itself.',
        },
        {
          question: 'How long does apostille processing take?',
          answer: 'Processing times vary by state, typically taking 3 to 10 business days. With Atheros, we eliminate formatting and notary errors that cause costly delays.',
        },
      ],
      whatsappMessage: 'Hello! I came from the Atheros website and would like a quote for a Hague Apostille on US documents.',
    },

    'traducoes': {
      slug: 'traducoes',
      category: 'legalizacao',
      icon: '🌐',
      badge: 'Official Translations',
      title: 'Certified US & Sworn Brazilian Translations',
      seoTitle: 'Certified Translations in USA & Sworn Translations in Brazil',
      subtitle: 'Official translations accepted by USCIS, courts and US universities, as well as registries and public agencies in Brazil.',
      metaDescription: 'Certified translation services in the USA (USCIS, DMV, universities) and sworn translations in Brazil (civil registries, IRS, banks). 100% acceptance guaranteed.',
      keywords: 'certified translation usa, sworn translation brazil, uscis translation, birth certificate translation uscis, tradução juramentada eua',
      intro: 'Portuguese documents are not directly accepted by US agencies, just as English documents lack validity in Brazilian institutions without official translations. Atheros handles both certification frameworks with full compliance guarantees.',
      whyNeeded: {
        title: 'Difference between Certified and Sworn Translations',
        description: 'Each country maintains its own legal validation system:',
        points: [
          'Certified Translation in the USA: Required by USCIS (immigration), NVC, family courts, universities, DMVs, and banks. Accompanied by a signed Certificate of Accuracy.',
          'Sworn Translation in Brazil (Tradução Juramentada): Required in Brazil by registries, courts, federal tax authorities (Receita Federal), and banks. Must be prepared by a licensed public sworn translator.',
        ],
      },
      useCases: {
        title: 'Most common translated documents',
        items: [
          'Birth, marriage, and divorce certificates for USCIS (Green Card, citizenship)',
          'Brazilian Federal Police criminal background checks',
          'Academic transcripts and diplomas for US credential evaluations (e.g. WES)',
          'US birth certificates for transcription into Brazilian registries',
          'IRS tax returns and pay stubs for income verification in Brazil',
          'Bank statements and legal affidavits',
        ],
      },
      requiredDocs: {
        title: 'How to request a quote',
        items: [
          'Clear photo or high-resolution PDF of all pages and reverse sides of your document',
          'Indication of where the translation will be submitted (USA or Brazil)',
          'Your required deadline',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Document Submission',
          description: 'Send us your scanned documents via WhatsApp or email. We count exact words and layout requirements.',
        },
        {
          number: 2,
          title: 'Transparent Flat Quote',
          description: 'We provide an all-inclusive price and precise turnaround delivery time.',
        },
        {
          number: 3,
          title: 'Professional Translation',
          description: 'Translated with legal precision and cross-checked by certified linguists.',
        },
        {
          number: 4,
          title: 'Certification & Delivery',
          description: 'Delivered digitally with legally recognized digital signatures, or physical copies by tracked mail.',
        },
      ],
      faqs: [
        {
          question: 'Does USCIS accept translations from Atheros?',
          answer: 'Yes, 100%! Our certified translations adhere strictly to federal guidelines in the Code of Federal Regulations (8 CFR 103.2(b)(3)), complete with our Certificate of Translation Accuracy.',
        },
        {
          question: 'Can I translate my own documents for USCIS?',
          answer: 'While immigration rules only state the translator must certify competency, self-translations are strongly discouraged by immigration attorneys due to perceived conflict of interest and terminology mistakes leading to RFEs.',
        },
      ],
      whatsappMessage: 'Hello! I came from the Atheros website and would like a quote for document translation.',
    },

    'vistos': {
      slug: 'vistos',
      category: 'vistos',
      icon: '✈️',
      badge: 'Visas & Travel to Brazil',
      title: 'Brazil Visa Assistance (e-Visa and VIVIS)',
      seoTitle: 'Brazil Visa Assistance: e-Visa and VIVIS in the USA | Atheros',
      subtitle: 'Complete assistance for foreign travelers and dual citizens needing to enter or stay in Brazil.',
      metaDescription: 'Specialized assistance for Brazil visas in the USA: e-Visa for US and Canadian citizens, visitor visas (VIVIS) and dual nationality guidance.',
      keywords: 'brazil visa for us citizens, brazil evisa 2026, visitor visa brazil vivis, apply brazil visa usa, brazil consulate visa advisory',
      intro: 'With reciprocal visa requirements reinstated by the Brazilian government, citizens of countries like the United States, Canada, and Australia must obtain a travel authorization prior to boarding. Atheros ensures your visa application is submitted accurately and without travel delays.',
      whyNeeded: {
        title: 'Why use visa advisory services?',
        description: 'The Brazilian consular platform imposes strict photographic and biometric specs:',
        points: [
          'Non-compliant photo dimensions or backgrounds result in immediate application rejection.',
          'Errors in consular forms may lead to forfeited non-refundable consular application fees.',
          'US-born children of Brazilian parents require clear assessment of consular birth registration vs. visa options.',
          'Avoid last-minute airport boarding denials due to pending approvals.',
        ],
      },
      useCases: {
        title: 'Types of visas we assist with',
        items: [
          'e-Visa for US citizens (100% online electronic visa)',
          'e-Visa for Canadian and Australian citizens',
          'VIVIS (Visitor Visa) for tourism, business, transit, or family visits',
          'Visas for dependents and relatives of Brazilian citizens',
          'Dual nationality guidance for US-born children of Brazilians',
        ],
      },
      requiredDocs: {
        title: 'Standard required documentation',
        items: [
          'Valid US or foreign passport with at least 6 months validity and blank pages',
          'Recent digital passport photo on plain white background (2x2 inches)',
          'Round-trip airline ticket booking or itinerary',
          'Proof of US address',
          'For minors under 18: Parental consent form signed by both parents and birth certificate',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Case Evaluation',
          description: 'We assess traveler nationality, purpose of travel, Brazilian ties, and departure date.',
        },
        {
          number: 2,
          title: 'Document Quality Check',
          description: 'We crop and format photos to consular standards and inspect supporting documentation.',
        },
        {
          number: 3,
          title: 'Official Submission',
          description: 'We complete the official government application, upload required attachments, and generate payment vouchers.',
        },
        {
          number: 4,
          title: 'Monitoring to Issuance',
          description: 'We track consular processing daily until your approved visa is issued.',
        },
      ],
      faqs: [
        {
          question: 'Do US citizens need a visa to travel to Brazil?',
          answer: 'Yes, the Brazilian government requires entry visas for passport holders from the USA, Canada, and Australia. Visas can be obtained electronically (e-Visa).',
        },
        {
          question: 'What is the validity of the Brazil e-Visa for Americans?',
          answer: 'The e-Visa for US citizens typically has a validity of up to 10 years, allowing stays of up to 90 days per year (extendable in Brazil with the Federal Police).',
        },
      ],
      whatsappMessage: 'Hello! I came from the Atheros website and would like assistance with a visa for Brazil.',
    },

    'vitem-xi': {
      slug: 'vitem-xi',
      category: 'vistos',
      icon: '👨‍👩‍👧‍👦',
      badge: 'Family Reunification',
      title: 'VITEM XI Visa: Family Reunification in Brazil',
      seoTitle: 'VITEM XI Visa: Family Reunification in Brazil | Atheros',
      subtitle: 'Complete guidance for foreign spouses, partners, or dependents moving to live legally with family in Brazil.',
      metaDescription: 'All about the VITEM XI Family Reunification Visa for Brazil. Guidance with apostilled FBI background checks, civil certificates and consular filing.',
      keywords: 'vitem xi visa brazil, family reunification brazil, marry brazilian visa, vitem 11 consulate brazil, live in brazil spouse visa',
      intro: 'The VITEM XI Temporary Visa is designed under Brazilian immigration law to allow foreign spouses, common-law partners, children, and dependents of Brazilian citizens to reside and work legally in Brazil with full civil rights.',
      whyNeeded: {
        title: 'Why does VITEM XI require specialized guidance?',
        description: 'Family reunification is one of the most rigorously vetted Brazilian visas:',
        points: [
          'Requires FBI Identity History Summary Checks with federal Hague Apostille and sworn translation.',
          'US marriages must be registered at the Brazilian Consulate or transcribed in a Brazilian registry beforehand.',
          'Common-law unions require extensive proof of cohabitation and shared financial life.',
          'Expired background checks (older than 90 days) will halt the entire application.',
        ],
      },
      useCases: {
        title: 'Who is eligible for VITEM XI?',
        items: [
          'Foreign spouse legally married to a Brazilian citizen',
          'Foreign common-law partner in a proven stable union with a Brazilian',
          'Foreign children of a Brazilian citizen',
          'Foreign parents of Brazilian citizen children',
          'Foreign siblings or grandchildren under legal custody or dependency of a Brazilian',
        ],
      },
      requiredDocs: {
        title: 'Key documentation needed',
        items: [
          'Valid foreign passport of the applicant',
          'Brazilian Consular Marriage Certificate (or US certificate apostilled and translated)',
          'Brazilian spouse/relative ID or passport',
          'Apostilled FBI background check',
          'Proof of US residence',
          'Affidavit of financial support and responsibility signed by the Brazilian relative',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Family Tie Assessment',
          description: 'We review marriage certificates or union documentation to verify eligibility.',
        },
        {
          number: 2,
          title: 'FBI & Apostille Coordination',
          description: 'We guide fingerprint submissions, apostille requirements, and sworn translations.',
        },
        {
          number: 3,
          title: 'Consular Dossier Assembly',
          description: 'We assemble the complete electronic and physical file per consular regulations.',
        },
        {
          number: 4,
          title: 'Submission & Follow-up',
          description: 'We monitor consular review until the visa vignette is affixed to the passport.',
        },
      ],
      faqs: [
        {
          question: 'Does the VITEM XI visa allow the holder to work in Brazil?',
          answer: 'Yes! Once registered with the Federal Police in Brazil and granted the National Migration Registry Card (CRNM), the foreign holder enjoys full rights to work and open businesses in Brazil.',
        },
        {
          question: 'Can we apply for family reunification while already in Brazil?',
          answer: 'Yes, through residency authorization with the Federal Police, but processing the VITEM XI through the Brazilian Consulate in the US is often faster and grants immediate legal status upon arrival.',
        },
      ],
      whatsappMessage: 'Hello! I came from the Atheros website and would like guidance for a VITEM XI Family Reunification Visa for Brazil.',
    },

    'passaporte': {
      slug: 'passaporte',
      category: 'consular',
      icon: '🛂',
      badge: 'Consular Documentation',
      title: 'Brazilian Passports & Consular Services in the USA',
      seoTitle: 'Brazilian Passport Renewal & Consular Services in the USA',
      subtitle: 'New issuance and renewal of passports, civil certificates, CPF and consular filings with speed and peace of mind.',
      metaDescription: 'Brazilian passport renewal in the USA. Assistance with birth and marriage certificates, minor travel permits and military registration.',
      keywords: 'brazilian passport renewal usa, renew brazilian passport boston massachusetts, brazilian consulate appointment, consular certificates brazil',
      intro: 'The Brazilian passport is essential for maintaining your citizenship rights and travel freedom. Atheros simplifies the bureaucratic submission process with Brazilian consulates across the United States, preventing delays and application rejections.',
      whyNeeded: {
        title: 'Why choose Atheros for consular services?',
        description: 'Consular requirements often involve hidden obstacles:',
        points: [
          'Voter status and military registration pending issues block passport issuance.',
          'Name spelling mismatches across older documents freeze consular records.',
          'Passports for minors require customized bilateral parental consent forms.',
          'Save time and avoid forfeited consular processing fees.',
        ],
      },
      useCases: {
        title: 'Consular services covered',
        items: [
          'Adult passport renewal (current or expired)',
          'First passport and renewals for minors under 18',
          'Consular Birth Registration for children born in the US',
          'Consular Marriage Registration for US marriages',
          'Voter registration status update and transfer abroad',
          'Military draft registration and certificate of exemption',
          'Travel permits for unaccompanied minors',
          'Residence and Life Certificates for Brazilian Social Security (INSS)',
        ],
      },
      requiredDocs: {
        title: 'Basic requirements for passport renewal',
        items: [
          'Previous Brazilian passport',
          'Brazilian birth or marriage certificate (with divorce endorsement if applicable)',
          'Brazilian photo ID (RG, driver\'s license)',
          'Recent passport photo complying with consular biometric specifications',
          'Proof of voter registration compliance',
          'Military certificate for male citizens between 18 and 45',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Document Screening',
          description: 'We review all civil documents, CPF, voter, and military registration statuses.',
        },
        {
          number: 2,
          title: 'Electronic Application & Uploads',
          description: 'We file the RER protocol and format all uploads per the E-Consular system.',
        },
        {
          number: 3,
          title: 'Appointment or Mail-in Dispatch',
          description: 'We coordinate consular appointment slots or prepare tracked postal packets.',
        },
        {
          number: 4,
          title: 'Tracking to Completion',
          description: 'We follow production until the new passport is safely in your possession.',
        },
      ],
      faqs: [
        {
          question: 'My passport expired years ago. Can I still renew it?',
          answer: 'Yes! An expired passport can be renewed at any time alongside your Brazilian birth or marriage certificate.',
        },
        {
          question: 'Do I have to go to the consulate in person?',
          answer: 'For many procedures and jurisdictions, consulates accept mail-in applications. Atheros prepares the exact tracked envelope package so you don\'t have to travel.',
        },
      ],
      whatsappMessage: 'Hello! I came from the Atheros website and would like help renewing my Brazilian passport.',
    },

    'procuracoes': {
      slug: 'procuracoes',
      category: 'procuracoes',
      icon: '📋',
      badge: 'Remote Legal Power',
      title: 'Public Powers of Attorney for Brazilians in the USA',
      seoTitle: 'Public Powers of Attorney in the USA for Brazil | Atheros',
      subtitle: 'Appoint trusted representatives in Brazil for real estate sales, banking transactions, INSS and probate.',
      metaDescription: 'Drafting and advisory for Public Powers of Attorney for Brazilians in the USA. For property sales, banking, inheritance and legal representation in Brazil.',
      keywords: 'power of attorney brazil us, procuracao publica eua, sell property brazil abroad, bank poa brazil, brazilian notary poa massachusetts',
      intro: 'A public power of attorney is the legal instrument granting someone the authority to act on your behalf in Brazil. Because it directly affects major financial and property rights, precise legal drafting is essential so Brazilian registries and banks accept it without issue.',
      whyNeeded: {
        title: 'Why precision drafting matters',
        description: 'Brazilian banks and registries mandate explicit, unambiguous powers:',
        points: [
          'Real estate sales require full property registry identifiers and explicit sales powers.',
          'Banking operations require naming specific financial institutions and authorized transactions.',
          'Probate and estate matters require explicit powers to accept or renounce inheritance.',
          'Imprecise wording will lead to immediate rejection by Brazilian notary offices.',
        ],
      },
      useCases: {
        title: 'Common powers of attorney drafted',
        items: [
          'Sale, purchase, transfer and deed of real estate in Brazil',
          'Banking transactions, opening, and closing bank accounts',
          'Representation before INSS for pensions, retirement and life proof',
          'Judicial and extrajudicial probate and estate distribution',
          'School and university enrollment for dependents',
          'Consensual divorce and division of assets',
          'Representation before the Brazilian Federal Revenue (Receita Federal)',
        ],
      },
      requiredDocs: {
        title: 'Information required',
        items: [
          'Grantor photo ID (Brazilian Passport or RG) and CPF',
          'Marriage certificate if married (spousal consent is legally required for property sales)',
          'Full personal data of the agent in Brazil (name, marital status, profession, ID, CPF, address)',
          'Specific transaction details (property deed/registry number, bank account details)',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Purpose Alignment',
          description: 'We review the exact transaction your representative needs to perform in Brazil.',
        },
        {
          number: 2,
          title: 'Custom Legal Drafting',
          description: 'We draft the legal text with all required clauses and powers demanded by the Brazilian registry.',
        },
        {
          number: 3,
          title: 'Channel Selection',
          description: 'We evaluate whether the POA should be executed via Consulate, Notary Public with Hague Apostille, or e-Notariado.',
        },
        {
          number: 4,
          title: 'Execution & Dispatch',
          description: 'We oversee the signing process to ensure full legal enforceability in Brazil.',
        },
      ],
      faqs: [
        {
          question: 'What is the difference between a public and private POA?',
          answer: 'A public power of attorney is recorded in the official books of a consulate or notary office and is legally required for real estate sales, inheritance, marriage, and major banking acts. Private POAs are only valid for simple everyday matters.',
        },
        {
          question: 'If I am married in the USA, does my spouse also need to sign?',
          answer: 'Under Brazilian law (except under absolute separation of assets), selling real estate requires spousal consent (outorga uxória/marital). Atheros drafts joint powers of attorney so both spouses sign correctly.',
        },
      ],
      whatsappMessage: 'Hello! I came from the Atheros website and would like guidance for a Public Power of Attorney for Brazil.',
    },

    'enotariado': {
      slug: 'enotariado',
      category: 'enotariado',
      icon: '🔐',
      badge: 'Digital Notary',
      title: 'e-Notariado for Brazilians Abroad',
      seoTitle: 'e-Notariado in the USA: Digital Notarial Acts | Atheros',
      subtitle: 'Execute powers of attorney, deeds and notarial acts with Brazilian registries via videoconference without traveling.',
      metaDescription: 'Advisory for e-Notariado for Brazilians in the USA. Sign digital powers of attorney and deeds online via videoconference with Brazilian registries.',
      keywords: 'enotariado usa, digital notary brazil abroad, enotariado power of attorney, electronic notarial acts exterior',
      intro: 'e-Notariado is the official platform regulated by Brazil\'s National Council of Justice (CNJ) connecting citizens directly with Brazilian notary offices. Brazilians living in the US can sign public powers of attorney, deeds, and notarial documents 100% digitally through videoconference.',
      whyNeeded: {
        title: 'Advantages of e-Notariado',
        description: 'e-Notariado transforms access to notary services from abroad:',
        points: [
          'No need for in-person consular appointments or travel.',
          'The Notarized Digital Certificate is issued remotely and at no charge by accredited notary offices.',
          'Full legal equivalence to physical in-person signatures with certified stamps.',
          'Fast turnaround: documents are often finalized in just a few business days.',
        ],
      },
      useCases: {
        title: 'What can be performed via e-Notariado',
        items: [
          'Public powers of attorney for real estate, banks, probate and INSS',
          'Public deeds for real estate purchase, sale, and donation',
          'Consensual notary divorce (without minor or incapacitated children)',
          'Formalization and dissolution of stable unions',
          'Electronic signature verification and notarial affidavits',
          'Electronic travel authorizations for minors',
        ],
      },
      requiredDocs: {
        title: 'Requirements to use the platform',
        items: [
          'Valid Brazilian photo ID (RG or CNH)',
          'Active CPF with the Brazilian Federal Revenue',
          'Smartphone with front camera and internet for the official app',
          'Proof of US address',
        ],
      },
      steps: [
        {
          number: 1,
          title: 'Compatibility Check',
          description: 'We verify that your notarial act is supported by e-Notariado and identify the jurisdictionally competent registry.',
        },
        {
          number: 2,
          title: 'Digital Certificate Setup',
          description: 'We assist with installing the app and guide the remote identity verification session.',
        },
        {
          number: 3,
          title: 'Draft Preparation & Review',
          description: 'We draft and review the text with the notary clerk to ensure all necessary legal powers are included.',
        },
        {
          number: 4,
          title: 'Videoconference & Digital Signature',
          description: 'We accompany the video session and digital signing, resulting in an instantly verified official electronic deed.',
        },
      ],
      faqs: [
        {
          question: 'Is the e-Notariado digital certificate free?',
          answer: 'Yes! The Notarized Digital Certificate issued through accredited registries on the e-Notariado platform is free of charge for citizens and stored securely on your phone.',
        },
        {
          question: 'Can any registry in Brazil perform e-Notariado for residents abroad?',
          answer: 'CNJ regulations mandate specific territorial jurisdiction rules (usually based on the grantor\'s last residence in Brazil or the property location). Atheros identifies the proper registry to prevent document invalidation.',
        },
      ],
      whatsappMessage: 'Hello! I came from the Atheros website and would like assistance with e-Notariado in the USA.',
    },
  },
};
