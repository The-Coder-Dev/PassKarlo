import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('PassKarlo Content')
    .items([
      S.listItem()
        .title('Institutes (Schools & Colleges)')
        .child(
          S.list()
            .title('Institutes')
            .items([
              S.listItem()
                .title('All Institutes')
                .child(S.documentTypeList('institute').title('All Institutes')),
              S.listItem()
                .title('Schools')
                .child(
                  S.documentTypeList('institute')
                    .title('Schools')
                    .filter('_type == "institute" && type == "school"')
                ),
              S.listItem()
                .title('Colleges')
                .child(
                  S.documentTypeList('institute')
                    .title('Colleges')
                    .filter('_type == "institute" && type == "college"')
                ),
              S.listItem()
                .title('Featured Institutes')
                .child(
                  S.documentTypeList('institute')
                    .title('Featured Institutes')
                    .filter('_type == "institute" && isFeatured == true')
                ),
            ])
        ),
      S.documentTypeListItem('teacher').title('Teachers'),
      S.documentTypeListItem('career').title('Careers'),
    ])
