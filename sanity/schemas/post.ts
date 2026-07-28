import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    // ── Português (obrigatório) ─────────────────────────────────
    defineField({
      name: 'title',
      title: 'Título (PT)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo (PT)',
      type: 'text',
      rows: 3,
      description: 'Breve descrição exibida nos cards do blog.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Texto alternativo (Para SEO e Acessibilidade)' },
        { name: 'caption', type: 'string', title: 'Legenda / Descrição visível (Opcional)' },
      ],
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'object',
      fields: [
        { name: 'name', title: 'Nome', type: 'string' },
        {
          name: 'photo',
          title: 'Foto',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Texto alternativo' }],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo (PT)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Citação', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Negrito', value: 'strong' },
              { title: 'Itálico', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Texto alternativo (SEO)' },
            { name: 'caption', type: 'string', title: 'Legenda (Aparece abaixo da imagem)' },
          ],
        },
      ],
    }),

    // ── 🇺🇸 English Version (opcional) ─────────────────────────
    defineField({
      name: 'titleEn',
      title: '🇺🇸 Title (EN)',
      type: 'string',
      description: 'Opcional — deixe em branco para usar o título em português.',
    }),
    defineField({
      name: 'excerptEn',
      title: '🇺🇸 Excerpt (EN)',
      type: 'text',
      rows: 3,
      description: 'Opcional — resumo em inglês exibido nos cards quando o site estiver em EN.',
    }),
    defineField({
      name: 'bodyEn',
      title: '🇺🇸 Content (EN)',
      type: 'array',
      description: 'Opcional — conteúdo do artigo em inglês. Deixe em branco para usar o português.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt text (SEO)' },
            { name: 'caption', type: 'string', title: 'Caption' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      titleEn: 'titleEn',
      media: 'mainImage',
      subtitle: 'category.title',
    },
    prepare(selection) {
      const { title, titleEn, media, subtitle } = selection;
      return {
        title: titleEn ? `${title} / ${titleEn}` : title,
        subtitle: subtitle || 'Sem Categoria',
        media,
      };
    },
  },
});
