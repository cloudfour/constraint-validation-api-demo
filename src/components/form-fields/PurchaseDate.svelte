<script>
  import { getISOFormattedDate } from '../../utils/get-iso-formatted-date';

  // 1 year ago today.
  const oneYearAgoToday = new Date();
  oneYearAgoToday.setUTCFullYear(oneYearAgoToday.getUTCFullYear() - 1);
</script>

<label for="purchase-date">Purchase date:</label>
<input
  id="purchase-date"
  name="purchaseDate"
  type="date"
  required
  min={getISOFormattedDate(oneYearAgoToday)}
  max={getISOFormattedDate(new Date())}
/>
