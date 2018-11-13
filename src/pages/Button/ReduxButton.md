import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { WithStyles, withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import { Model } from '../../../Main/Model';
import { Product } from '../../Model/store';
import { ProductActions } from '../../Model/actions/actions';
import { styles, WithStyleProps } from './ProductCardStyles';

import { productByIdSelector } from '../../Model/selectors';
import { CartActions } from '../../../Cart/Model/actions';
import { getCartProducts } from '../../../Cart/Model/selectors';

/* OwnProps are passed from component's parent */
interface OwnProps extends RouteComponentProps<any> {
  index: number;
}

/* ModelProps are props from app state */
interface ModelProps {
  product?: Product;
}

/* DispatchProps point to actionCreators */
interface DispatchProps {
  getProductById: (id: string) => void;
  addToCart: (id: string) => void;
}

/* use type alias to write less code later */
type Props = ModelProps & DispatchProps & OwnProps;

/* just some internal component state that could be used in other methods, skip it in this example */
interface State {
  clicked: boolean;
}

/* it's easy to forget to describe here props generic and this mistake will cause a lot of errors */
export class ProductCardPure extends React.Component<Props & WithStyles<WithStyleProps>, State> {
  state: Readonly<State> = {
    clicked: false,
  };

  componentWillMount() {
    const { product, match: { params } } = this.props;

    if (!product || product.id !== params.id) {
      this.props.getProductById(this.props.match.params.id);
    }
  }

  onClick = () => {
    if (this.props.product) {
      this.props.addToCart(this.props.product.id);
    }
  }

  render() {
    const { product, classes } = this.props;

    return  product
      ? (
        <section className={classes.card}>
            <div className={classes.info}>
              <div className={classes.title}>{product.name}</div>
              <div className={classes.description}>{product.description}</div>
            </div>
            <div className={classes.action}>
              <Button
                aria-label="add"
                className={classes.button}
                onClick={this.onClick}
                data-testid="addProductToCart"
              >
                <AddIcon />
              </Button>
            </div>
        </section>
      )
      : null;
  }
}

/* state scheme is described in Model.Root class and OwnProps inlude also router props */
const mapStateToProps = (state: Model.Root, props: OwnProps): ModelProps => ({
  product: productByIdSelector(state, props.match.params.id),
});

/* get our action creators */
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>): DispatchProps => ({
  getProductById: (id: string) => dispatch(ProductActions.getProductById(id)),
  addToCart: (id: string) => dispatch(CartActions.addProductToCart(id)),
});

/* pass here all interfaces described above */
const ProductCardConnected =
  connect<ModelProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(ProductCardPure);

/* withStyles HOC will give our component 'classes' property */                                                     /
const ProductCardWithTheme = withStyles(styles, { withTheme: true })<OwnProps>(ProductCardConnected);

/* use withrouter HOC with generic, at least with <{}>, otherwise you'll get an error */
const ProductCard = withRouter<OwnProps>(ProductCardWithTheme);

export default ProductCard;