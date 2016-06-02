import metawidget from 'metawidget';


export const config = {
  inspector: new metawidget.inspector.CompositeInspector([
    new metawidget.inspector.PropertyTypeInspector(),
    new metawidget.inspector.JsonSchemaInspector({
      properties: {
        details: {
          large: true,
        },
      },
    }),
  ]),
};
